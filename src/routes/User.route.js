var express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
var router = express.Router();

const User = require("../models/User.model");
const Users = require("../repository/User.repository");

router.post("/add", async (req, res) => {
  let newUser = new User(req.body);
  await Users.CreateUser(newUser);
  res.status(200).json(newUser);
});

router.post("/login", async (req, res) => {
  const user = await Users.findUserByEmailAndPassword(req.body);
  if(user != null)
    res.status(200).json(user);
  else
    res.status(401).json("invalid credential");
});

module.exports = router;
