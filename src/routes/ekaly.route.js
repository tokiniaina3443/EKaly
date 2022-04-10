var express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
var router = express.Router();

const Ekaly = require("../models/ekaly.model");
const Ekalys = require("../repository/ekaly.repository");


router.post("/login", async (req, res) => {
  let ekaly = await Ekalys.FindEkalyByMailAndPassword(req.body.mail, req.body.motDePasse);
  if(ekaly != null){
    let token = jwt.sign(ekaly.mail, process.env.TOKEN_SECRET)
    res.status(200).json({ action: "success", payload: {token: token}});
  }
  else{
    res.status(401).json({action : "fail", message: "invalid credential"});
  }
});

module.exports = router;