const mongoose = require('mongoose');

const EkalySchema = mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    }
  });

const ekaly = mongoose.model('ekalys', EkalySchema)
module.exports = ekaly;