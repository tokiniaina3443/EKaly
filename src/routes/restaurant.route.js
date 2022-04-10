var express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
var router = express.Router();

const Restaurant = require("../models/restaurant.model");
const Restaurants = require("../repository/restaurant.repository");

router.post("/add", async (req, res) => {
  let restaurant = await Restaurants.CreateRestaurant(req.body);
  res.status(200).json({action: "success", payload: restaurant});
});

router.post("/login", async (req, res) => {
  let restaurant = await Restaurants.FindRestaurantByMailAndPassword(req.body.mail, req.body.motDePasse);
  if(restaurant != null){
    let token = jwt.sign(restaurant.mail , process.env.TOKEN_SECRET)
    res.status(200).json({ action: "success", payload: {token : token}});
  }
  else{
    res.status(401).json({action : "fail", message: "invalid credential"});
  }
});

router.post("/addPlat", async (req, res) => {
  let restaurant = await Restaurants.AddPlat(req.body.idRestaurant, req.body.plat);
  if(restaurant != null){
    res.status(200).json({action: "success", payload: restaurant});
  }
  else
  {
    console.log("error");
    res.status(500).json({action: "fail", payload: "server error"});
  }
});

router.get("/listPlat", async (req, res) => {
  let plats = await Restaurants.ListPlat(req.query.idRestaurant, req.query.filterName);
  res.status(200).json({action: "success", payload: plats});
});

router.get("/list", async (req, res) => {
  let restaurants = await Restaurants.ListRestaurant(req.query.filterName);
  res.status(200).json({action: "success", payload: restaurants});
});
  

module.exports = router;