const res = require("express/lib/response");
var Ekalys = require("../models/ekaly.model");

var FindEkalyByMailAndPassword = async (mail, motDePasse) => {
    const ekaly = await Ekalys.findOne({mail: mail, motDePasse: motDePasse});
    return ekaly;
};

module.exports = { FindEkalyByMailAndPassword };