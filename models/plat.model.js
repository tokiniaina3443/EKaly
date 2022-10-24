const mongoose = require('mongoose');

var platSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: 'Nom can\'t be empty'
    },
    idrestau: {
        type: String,
        required: 'Restaurant can\'t be empty'
    },
    restau: {
      type: String
    },
    prix: {
      type: Number,
      required: 'Prix revient can\'t be empty',
      min: [1, 'Too few']
    },
    prixvente: {
      type: Number,
      required: 'Prix vente can\'t be empty',
      min: [1, 'Too few']
    },
    visible: {
      type: Boolean,
      required: 'visibility achat can\'t be empty'
    }
});

mongoose.model('Plat', platSchema);
