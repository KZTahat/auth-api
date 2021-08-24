"use strict";

const { start } = require("./src/server.js");
const { dataBase } = require("./src/index.js");
require("dotenv").config();

dataBase
  .sync()
  .then(() => {
    start(process.env.PORT);
  })
  .catch((err) => console.log(`error in initilzation ${err}`));
