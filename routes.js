const { Router } = require("express");
const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.end("hello Express!! ");
});

route.get("/login", (req, res) => {
  res.end("I am Login");
});

route.get("*", (req, res) => {
  res.end("Page was not founded");
});

module.exports = route;
