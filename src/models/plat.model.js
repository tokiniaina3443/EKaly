const { Double } = require('mongodb');
const mongoose = require('mongoose');

const platSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prixDeFabrication: {
        type: Number,
        required: true
    },
    prixDeVente: {
        type: Number,
        required: true
    },
  });

const plat = mongoose.model('plats', platSchema);
module.exports = plat;