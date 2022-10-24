const mongoose = require('mongoose');
const _ = require('lodash');
const { isUndefined } = require('lodash');

const Infocommande = mongoose.model('Infocommande');

module.exports.addinfocommande = (req,res,next) => {
    var infocommande = new Infocommande();
    infocommande.idplat = req.body.idplat;
    infocommande.idrestau = req.body.idrestau;
    infocommande.benefice = req.body.benefice;
    infocommande.date = req.body.date;
    infocommande.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }else {
            return next(err);
        }
    });
}

module.exports.infocommandelist = (req, res, next) => {
  Infocommande.find({},
    (err, infocommandes) => {
      if (!infocommandes) {
        return res.status(404).json({ status: false, message: 'Error when get list of infocommande.' });
      }else {
        return res.status(200).json({ status: true, infocommande : infocommandes});
      }
    }
  );
}
module.exports.infocommandelistbyplat = (req, res, next) => {
  var idrestau = req.body.idrestau;
  if (isUndefined(idrestau) || idrestau == '') {
    idrestau = req._id;
  }
  Infocommande.aggregate([
    { $match: { idrestau: idrestau , date: new Date(req.body.date) } },
    { $group: { _id: "$plat" , benefice: { $sum: "$benefice" } } }
  ] , (err, infocommandes) => {
      if (!infocommandes || err) {
        return res.status(404).json({ status: false, message: 'Error when get list of infocommande.' });
      }else {
        return res.status(200).json({ status: true, infocommande : infocommandes});
      }
    }
  );
}
module.exports.infocommandelistbyrestau = (req, res, next) => {
  Infocommande.aggregate([
    { $match: { date: new Date(req.body.date) } },
    { $group: { _id: "$restau" , benefice: { $sum: "$benefice" } } }
  ] , (err, infocommandes) => {
      if (!infocommandes || err) {
        return res.status(404).json({ status: false, message: 'Error when get list of infocommande.' });
      }else {
        return res.status(200).json({ status: true, infocommande : infocommandes});
      }
    }
  );
}
