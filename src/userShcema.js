"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const secret = process.env.SECRET;

const users = (sequelize, DataTypes) => {
  const model = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "writer", "editor", "admin"),
      defaultValue: "user",
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          user: ["read"],
          writer: ["read", "create"],
          editor: ["read", "create", "update"],
          admin: ["read", "create", "update", "delete"],
        };
        return acl[this.role];
      },
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign(
          { userName: this.userName, capabilities: this.capabilities },
          secret
        );
      },
      set(tokenObj) {
        return jwt.sign(tokenObj, secret);
      },
    },
  });
  model.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  model.authenticateBasic = async function (userName, password) {
    let user = await this.findOne({ where: { userName } });
    let isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    }
    return "Invalid User";
  };

  model.authenticateBearer = async function (token) {
    let verfiedToken = jwt.verify(token, secret);
    let user = await this.findOne({
      where: { userName: verfiedToken.userName },
    });
    if (user) {
      return user;
    }
    return "Invalid Login";
  };

  return model;
};

module.exports = users;
