const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    plats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Plat'
    }]
    
  });

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
module.exports = Restaurant;