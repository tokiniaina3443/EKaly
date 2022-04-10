const res = require("express/lib/response");
var Clients = require("../models/client.model");

var CreateClient = async (client) => {
  let newClient = await Clients.create(client);
  return newClient;
}

var FindClientByMailAndPassword = async (mail, motDePasse) => {
    const client = await Clients.findOne({mail: mail, motDePasse: motDePasse});
    return client;
};

module.exports = { CreateClient, FindClientByMailAndPassword };