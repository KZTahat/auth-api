"use strict";

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
let POSTGRES_URI = process.env.POSTGRES_URI;
const sequelize = new Sequelize(POSTGRES_URI, {});
const userShcema = require("./userShcema.js");

const userModel = userShcema(sequelize, DataTypes);

module.exports = {
  dataBase: sequelize,
  User: userModel,
};
