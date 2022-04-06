const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }
  });

const Plat = mongoose.model('Plat', PlatSchema);
module.exports = Plat;