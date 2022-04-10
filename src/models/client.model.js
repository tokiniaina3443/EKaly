const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
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

const client = mongoose.model('clients', clientSchema);
module.exports = client;