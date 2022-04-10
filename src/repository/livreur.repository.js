const res = require("express/lib/response");
var Livreurs = require("../models/livreur.model");
var Commands = require("../models/command.model");

var FindLivreurByMailAndPassword = async (mail, motDePasse) => {
    const ekaly = await Livreurs.findOne({mail: mail, motDePasse: motDePasse});
    return ekaly;
};

var ListLivreur = async(filterName) =>{
    if(filterName != null){
        let livreurs = await Livreurs.find({ nom: {$regex: '.*' + filterName + '.*'}});
        return livreurs;
      }
      else{
        let livreurs = await Livreurs.find();
        return livreurs;
      }
}

var ListCommand = async() => {
    const commands = await Commands.find()
    .populate('client')
    .populate('restaurant')
    .populate('plats.plat');
    return commands;
}

var Livrer = async (idCommand) => {
    const command = await Commands.findOneAndUpdate({_id: idCommand}, {status: "livre"});
    return command;
}

module.exports = { FindLivreurByMailAndPassword, ListLivreur, ListCommand, Livrer};