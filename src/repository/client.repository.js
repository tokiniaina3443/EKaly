const res = require("express/lib/response");
var Clients = require("../models/client.model");
var Command = require("../models/command.model");

var CreateClient = async (client) => {
  let newClient = await Clients.create(client);
  return newClient;
}

var FindClientByMailAndPassword = async (mail, motDePasse) => {
    const client = await Clients.findOne({mail: mail, motDePasse: motDePasse});
    return client;
};

var CommandPlat = async (idClient, commandData) => {
    let newCommand = new Command({ 
        client: idClient, 
        restaurant: commandData.idRestaurant,
        date: Date.now(),
        plats: commandData.plats
    });
    return await Command.create(newCommand);
}

module.exports = { CreateClient, FindClientByMailAndPassword, CommandPlat };