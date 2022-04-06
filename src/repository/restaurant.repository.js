const res = require("express/lib/response");
var Restaurants = require("../models/restaurant.model");
var Plats = require("../models/plat.model");

// Create restaurant
var CreateRestaurant = async (restaurantData) => {
  await Restaurants.create(restaurantData, (err, res) => {
    if (err) throw err;
  });
};

// list all restaurant
var ListRestaurant = async () => {
  return await Restaurants.find().populate("plats");
};

var AddPlat = async ({ idRestaurant, plat }) => {
  const newPlat = await Plats.create(plat);
  console.log(newPlat._id);
  await Restaurants.findOneAndUpdate(
    { _id: idRestaurant },
    { $push: { plats: newPlat._id } }
  );
};

module.exports = { CreateRestaurant, ListRestaurant, AddPlat };
