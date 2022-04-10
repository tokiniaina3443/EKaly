const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
    },
    motDePasse: {
        type: String,
        required: true
    },
    plats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'plats'
    }]
    
  });

const restaurant = mongoose.model('restaurants', RestaurantSchema)
module.exports = restaurant;