const mongoose = require('mongoose');

var commandeSchema = new mongoose.Schema({
    idmere: {
      type: String,
      required: 'Plat can\'t be empty'
    },
    idplat: {
        type: String,
        required: 'Plat can\'t be empty'
    },
    nomplat: {
      type: String,
      required: 'Plat can\'t be empty'
    },
    quantite: {
      type: Number,
      required: 'Quantite can\'t be empty',
      min: [0, 'Too few']
    }
});

mongoose.model('Commande', commandeSchema);
