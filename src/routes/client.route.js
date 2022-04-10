var express = require("express");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
var router = express.Router();

const Utils = require("../commonExtension/utils");
const Client = require("../models/client.model");
const Clients = require("../repository/client.repository");


router.post("/signIn", async (req, res) => {
  let newClient = await Clients.CreateClient(req.body);
  res.status(200).json(newClient);
});

router.post("/login", async (req, res) => {
    let client = await Clients.FindClientByMailAndPassword(req.body.mail, req.body.motDePasse);
    if(client != null){
      let token = jwt.sign({id: client._id}, process.env.TOKEN_SECRET)
      res.status(200).json({ action: "success", payload: {token: token}});
    }
    else{
      res.status(401).json({action : "fail", message: "invalid credential"});
    }
});

router.post("/command", Utils.AuthenticateToken, async (req, res) => {
    let idClient = Utils.GetTokenId(req, res);
    let command = await Clients.CommandPlat(idClient, req.body);
    res.status(200).json({action: "success", payload: command});
});

module.exports = router;