const express = require("express");
const route = express.Router();
const authController = require("../controllers/authController");

route.get("/", function (req, res) {
  res.send("site under construction");
});

route.post("/signup", authController.signup);

module.exports = route;
