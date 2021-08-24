"use strict";

const express = require("express");
const server = express();
const signupCheck = require("./middelwares/signupCheck.js");
const basicAuth = require("./middelwares/basicAuth.js");
const bearerAuth = require("./middelwares/bearerAuth.js");
const accessControl = require("./middelwares/accessControl.js");
const { User } = require("./index.js");
server.use(express.json());

server.post("/signup", signupCheck(User), (req, res) => {
  if (req.user) {
    res.status(201).send(req.user);
  } else {
    res.status(400).send("username already exists");
  }
});

server.post("/signin", basicAuth(User), (req, res) => {
  res.status(200).send(req.user);
});

server.get("/user", bearerAuth(User), accessControl("read"), (req, res) => {
  res.status(200).send(`I have read permissions , ${req.user}`);
});

server.get("/create", bearerAuth(User), accessControl("create"), (req, res) => {
  res.status(200).send("Ok! I have create permissions");
});

server.get("/update", bearerAuth(User), accessControl("update"), (req, res) => {
  res.status(200).send("Ok! I have update permissions");
});

server.get("/delete", bearerAuth(User), accessControl("delete"), (req, res) => {
  res.status(200).send("Ok! I have delete permissions");
});

function start(port) {
  server.listen(port, () => console.log(`Server Is Listining On Poer ${port}`));
}

module.exports = {
  start,
};
