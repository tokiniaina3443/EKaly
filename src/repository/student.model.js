var Student = require("../models/student.module.js");

// Créer un étudiant
var createStudent = async (studentData) => {
  let newStudent = await Student.create(studentData);
  console.log(newStudent);
  return newStudent;
};

// Récupérer un étudiant par son prenom
var findStudent = async () => {
  const student = await Student.find({});
  return student;
};

// recupérer tous les etudiant
// module.exports.findStudent = async () => {
//   return Student.collection();
// };

module.exports = { createStudent, findStudent };
