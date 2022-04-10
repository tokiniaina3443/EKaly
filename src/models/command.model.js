const mongoose = require('mongoose');

const commandSchema = mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'clients',
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'restaurants',
        required: true
    },
    date: Date,
    livreur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'livreurs'
    },
    status: {
        type: String,
        enum: ['nonLivre', 'livre'],
        default : 'nonLivre',
    },
    plats: [{
        plat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plats'
        },
        quantity: Number
    }]
  });

const command = mongoose.model('commands', commandSchema);
module.exports = command;