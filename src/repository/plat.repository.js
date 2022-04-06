const res = require("express/lib/response");
var Plats = require("../models/plat.model");

// Create restaurant
var CreatePlat = async (PlatData) => {
  await Plats.create(PlatData, (err, res) => {
    if (err) throw err;
  });
};

module.exports = { CreatePlat };