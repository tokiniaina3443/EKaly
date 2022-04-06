const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name:  {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    sexe: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['client', 'Ekaly', 'restaurent', 'livreur'],
        default : 'client',
    }
  });

const User = mongoose.model('User', UserSchema)
module.exports = User;