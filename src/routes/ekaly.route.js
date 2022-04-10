var express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
var router = express.Router();

const Utils = require("../commonExtension/utils");
const Ekaly = require("../models/ekaly.model");
const Ekalys = require("../repository/ekaly.repository");
const Livreurs = require("../repository/livreur.repository");
const res = require("express/lib/response");


router.post("/login", async (req, res) => {
  let ekaly = await Ekalys.FindEkalyByMailAndPassword(req.body.mail, req.body.motDePasse);
  if(ekaly != null){
    let token = jwt.sign({id: ekaly._id}, process.env.TOKEN_SECRET)
    res.status(200).json({ action: "success", payload: {token: token}});
  }
  else{
    res.status(401).json({action : "fail", message: "invalid credential"});
  }
});

router.get("/listCommand", Utils.AuthenticateToken, async (req, res) => {
    let command = await Ekalys.ListCommand();
    res.status(200).json({action: "success", payload: command})
});

router.get("/listLivreur", Utils.AuthenticateToken, async (req, res) => {
    let livreurs = await Livreurs.ListLivreur();
    res.status(200).json({action: "success", payload: livreurs})
});

router.post("/assignerLivreur", Utils.AuthenticateToken, async (req, res)=> {
    let command = await Ekalys.AssignerLivreurACommand(req.body.idCommand, req.body.idLivreur);
    res.status(200).json({action: "success", payload: command});
});

module.exports = router;