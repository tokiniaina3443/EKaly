const mongoose = require('mongoose');
const _ = require('lodash');

const Commandemere = mongoose.model('Commandemere');
const Commande = mongoose.model('Commande');
const Infocommande = mongoose.model('Infocommande');

const User = mongoose.model('User');
const Plat = mongoose.model('Plat');

function addCommandeWithQuantite(idmere ,plat , quantite) {
  var commande = new Commande();
  commande.idplat = plat['_id'];
  commande.nomplat = plat['nom'];
  commande.quantite = quantite;
  if (quantite < 1) return;
  commande.idmere = idmere;
  commande.save(function (err, result) {
    if (err) {
      //console.log(err);
    }else{
      //console.log(result);
    }
  });
}
function addCommandeMere(client ,mail, date, idplat, quantite){
  var commandemere = new Commandemere();
  commandemere.idClient = client;
  commandemere.client = mail;
  commandemere.etat = "commander";
  commandemere.date = date;
  commandemere.save(function (err, result) {
    var index=0;
    while(index < idplat.length) {
      addcomm(result["_id"], idplat[index], quantite[index] , date )
      index= index + 1;
    }
  });
}
function addcomm(idmere ,idplat, quantite , date ) {
  Plat.findOne({ _id: idplat } ,
  (err, result) => {
    if (err) {
      console.log(err);
    }else{
      addCommandeWithQuantite(idmere ,result , quantite);
      addInfoCommandeWithQuantite(result, quantite, date);
    }
  });
}
function addInfoCommandeWithQuantite(plat , quantite, date){
  var infocommande = new Infocommande();
  infocommande.idplat = plat['_id'];
  infocommande.plat = plat['nom'];
  infocommande.idrestau = plat['idrestau'];
  infocommande.restau = plat['restau'];
  if (quantite < 1) return;
  infocommande.benefice = (plat['prixvente'] - plat['prix'])*quantite ;
  infocommande.date = date;
  infocommande.save(function (err, result) {
    if (err) {
      console.log(err);
    }else{
      //console.log(result);
    }
  });
}
function getCurrentDate(){
  var date = new Date();
    var month = date.getMonth() + 1;
    var strmonth = ''+month;
    var dat = date.getDate();
    var strdat = ''+dat;
    if (month < 10) strmonth = '0'+month;
    if (dat < 10) strdat = '0'+dat;


  return date.getFullYear() + '-' + strmonth + '-' + strdat;
}

module.exports.addcommandes = (req,res,next) => {
  var date = getCurrentDate();
  var idplat = req.body.ids;
  var quantite = req.body.quantites;
  User.find({ _id: req._id},
    (err, users) => {
      addCommandeMere(req._id , users[0]['email'], date, idplat, quantite);
      return res.status(200).json({ status: true });
  });
}

module.exports.commandemerelist = (req, res, next) => {
  Commandemere.find({ etat: req.body.etat },
    (err, commandemeres) => {
      if (!commandemeres) {
        return res.status(404).json({ status: false, message: 'Error when get list of commande.' });
      }else {
        return res.status(200).json({ status: true, commandemere : commandemeres});
      }
    }
  );
}
module.exports.commandemerelistr = (req, res, next) => {
  Commandemere.find({ etat: req.body.etat , idrestau: req._id},
    (err, commandemeres) => {
      if (!commandemeres) {
        return res.status(404).json({ status: false, message: 'Error when get list of commande.' });
      }else {
        return res.status(200).json({ status: true, commandemere : commandemeres});
      }
    }
  );
}

module.exports.commandelist = (req, res, next) => {
  Commande.find({ idmere: req.body.idmere },
    (err, commandes) => {
      if (!commandes) {
        return res.status(404).json({ status: false, message: 'Error when get list of commande.' });
      }else {
        return res.status(200).json({ status: true, commande : commandes});
      }
    }
  );
}

module.exports.preparerCommande= (req, res, next) => {
  Commandemere.updateOne({ _id: req.body.idmere}, { etat: "preparer" }, function (err, commande) {
    if (err) {
      console.log(err);
    }
  }
  );
  return res.status(200).json({ status: true, message: 'success'});
}
module.exports.livrerCommande= (req, res, next) => {
  Commandemere.updateOne({ _id: req.body.idmere}, { etat: "livrer" }, function (err, commande) {
    if (err) {
      console.log(err);
    }
  }
  );
  return res.status(200).json({ status: true, message: 'success'});
}
