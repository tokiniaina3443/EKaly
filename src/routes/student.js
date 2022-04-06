var express = require("express");
const jwt = require('jsonwebtoken');
const req = require("express/lib/request");
var router = express.Router();

const studentRepository = require('../repository/student.model');
const Student = require("../models/student.module");

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    next()
  })
};

router.post("/add", authenticateToken, async (req, res) => {
    let newStudent = new Student(req.body);
    await studentRepository.createStudent(newStudent);
    res.status(200).json(newStudent);
});

router.get("/find", async (req, res) => {
    const ob = await studentRepository.findStudent();
    res.status(200).json(ob);
});

router.post("/generateToken", (req, res) => {
    console.log(process.env.TOKEN_SECRET);
    res.status(200).json(jwt.sign("username", process.env.TOKEN_SECRET));
});


module.exports = router;
