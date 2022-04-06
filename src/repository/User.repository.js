const res = require("express/lib/response");
var Users = require("../models/User.model.js");

// Create user
var CreateUser = async (userData) => {
  await Users.create(userData, (err, res) => {
    if (err) throw err;
  });
};

// find user by email and password
var findUserByEmailAndPassword = async ({ email, password }) => {
  return await Users.findOne({ email: email, password: password });
};

module.exports = { CreateUser, findUserByEmailAndPassword };
