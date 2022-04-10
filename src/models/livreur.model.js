const mongoose = require('mongoose');

const LivreurSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    }
  });

const livreur = mongoose.model('livreurs', LivreurSchema)
module.exports = livreur;