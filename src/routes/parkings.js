var express = require("express");
var router = express.Router();

const data = require('../../data/parkings.json');

router.get("/", (req, res) => {
  res.status(200).json(data);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const parking = data.find((e) => e.id === id);
  res.status(200).json(parking);
});

router.post("/", (req, res) => {
  data.push(req.body);
  res.status(200).json(data);
});

module.exports = router;
