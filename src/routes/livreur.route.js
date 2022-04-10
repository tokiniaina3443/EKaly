var express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
var router = express.Router();

const Utils = require("../commonExtension/utils");
const Livreur = require("../models/livreur.model");
const Livreurs = require("../repository/livreur.repository");


router.post("/login", async (req, res) => {
  let livreur = await Livreurs.FindLivreurByMailAndPassword(req.body.mail, req.body.motDePasse);
  if(livreur != null){
    let token = jwt.sign({id: livreur._id}, process.env.TOKEN_SECRET)
    res.status(200).json({ action: "success", payload: {token: token}});
  }
  else{
    res.status(401).json({action : "fail", message: "invalid credential"});
  }
});

router.get("/listCommand", Utils.AuthenticateToken, async (req, res) => {
    let command = await Livreurs.ListCommand();
    res.status(200).json({action: "success", payload: command})
});

router.post("/livrer", Utils.AuthenticateToken, async (req, res) => {
    let command = await Livreurs.Livrer(req.body.idCommand);
    res.status(200).json({action: "success", payload: command})
});

module.exports = router;