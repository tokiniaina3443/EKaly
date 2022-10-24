const mongoose = require('mongoose');
var commandemereSchema = new mongoose.Schema({
    idClient: {
      type: String,
      required: 'Client can\'t be empty'
    },
    client: {
      type: String
    },
    date: {
      type: Date,
      required: 'Date can\'t be empty'
    },
    etat: { // commander/ preparer / livrer
      type: String,
      required: 'etat commande can\'t be empty'
    },
});

mongoose.model('Commandemere', commandemereSchema);
