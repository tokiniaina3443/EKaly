const mongoose = require('mongoose');

var infocommandeSchema = new mongoose.Schema({
    idplat: {
      type: String,
      required: 'Plat can\'t be empty'
    },
    plat: {
      type: String,
    },
    idrestau: {
      type: String,
      required: 'Restaurant can\'t be empty'
    },
    restau: {
      type: String,
    },
    benefice: {
      type: Number,
      required: 'Client can\'t be empty'
    },
    date: {
      type: Date,
      required: 'Date can\'t be empty'
    }
});

mongoose.model('Infocommande', infocommandeSchema);
