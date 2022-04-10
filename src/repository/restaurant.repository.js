const res = require("express/lib/response");

var Restaurants = require("../models/restaurant.model");
var Plats = require("../models/plat.model");
const restaurant = require("../models/restaurant.model");

var CreateRestaurant = async (RestaurantData) => {
  let restaurant = await Restaurants.create(RestaurantData);
  return restaurant;
}

var FindRestaurantByMailAndPassword = async (mail, motDePasse) => {
  const restaurant = await Restaurants.findOne({mail: mail, motDePasse: motDePasse});
  return restaurant;
}

var AddPlat = async (idRestaurant, plat) => {
  let newPlat = await Plats.create(plat);
  let newRestaurant = await Restaurants.findOneAndUpdate(
    { _id: idRestaurant },
    { $push: { plats: newPlat._id } }
  );
  return newPlat;
};

var ListPlat = async (idRestaurant, filterName) => {
  if(filterName != null){
    let restaurants = await Restaurants.findOne({_id: idRestaurant})
    .populate({path: 'plats',
     match: { nom: {$regex: '.*' + filterName + '.*'}}});
    return restaurants.plats;
  }
  else{
    let restaurants = await Restaurants.findOne({_id: idRestaurant})
    .populate('plats');
    return restaurants.plats;
  }
}

var ListRestaurant = async(filterName) => {
  if(filterName != null){
    let restaurants = await Restaurants.find({ nom: {$regex: '.*' + filterName + '.*'}});
    return restaurants;
  }
  else{
    let restaurants = await Restaurants.find({});
    return restaurants;
  }
}

module.exports = { FindRestaurantByMailAndPassword, CreateRestaurant, AddPlat, ListPlat, ListRestaurant };
