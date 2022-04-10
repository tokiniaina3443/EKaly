const res = require("express/lib/response");
var Ekalys = require("../models/ekaly.model");
var Commands = require("../models/command.model");

var FindEkalyByMailAndPassword = async (mail, motDePasse) => {
    const ekaly = await Ekalys.findOne({mail: mail, motDePasse: motDePasse});
    return ekaly;
};

var ListCommand = async() => {
    const commands = await Commands.find()
    .populate('client')
    .populate('restaurant')
    .populate('plats.plat');
    return commands;
}

var AssignerLivreurACommand = async (idCommand, idLivreur) => {
    let command = await Commands.findOneAndUpdate({_id: idCommand}, {livreur: idLivreur});
    return command;
}

module.exports = { FindEkalyByMailAndPassword, ListCommand, AssignerLivreurACommand };