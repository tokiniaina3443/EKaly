const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = mongoose.Schema({
    firstName:  String,
    lastName: String,
    birthday: Date,
    sexe: String
  });

const Student = mongoose.model('Student', studentSchema)

module.exports = Student