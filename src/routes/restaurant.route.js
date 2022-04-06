var express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
var router = express.Router();

const Restaurant = require("../models/restaurant.model");
const Restaurants = require("../repository/restaurant.repository");

router.post("/add", async (req, res) => {
  let newRestaurant = new Restaurant(req.body);
  await Restaurants.CreateRestaurant(newRestaurant);
  res.status(200).json(newRestaurant);
});

router.get("/list", async (req, res) => {
  const restaurants = await Restaurants.ListRestaurant();
  res.status(200).json(restaurants);
});

router.post("/addPlat", async (req, res) => {
    await Restaurants.AddPlat(req.body);
    res.status(200).json("success");
  });
  

module.exports = router;