const mongoose = require('mongoose');
const _ = require('lodash');

const Plat = mongoose.model('Plat');
const User = mongoose.model('User');

module.exports.addplat = (req,res,next) => {
  User.find({ _id: req._id},
    (err, users) => {
      var plat = new Plat();
      plat.nom = req.body.nom;
      plat.idrestau = req._id;
      plat.restau = users[0]['email'];
      if (req.body.prix < 1) return;
      if (req.body.prixvente < 1) return;
      plat.prix = req.body.prix;
      plat.prixvente = req.body.prixvente;
      var visible =req.body.visible;
      if (visible==null) visible = false;
      plat.visible = visible;
      plat.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }else {
            return next(err);
        }
      });
    }
  );
}

module.exports.platlist = (req, res, next) => {
  Plat.find({ idrestau: req._id },
    (err, plats) => {
      if (!plats) {
        return res.status(404).json({ status: false, message: 'Error when get list of plat.' });
      }else {
        return res.status(200).json({ status: true, plat : plats});
      }
    }
  );
}
module.exports.platlistclient = (req, res, next) => {
  Plat.find({ visible: true },
    (err, plats) => {
      if (!plats) {
        return res.status(404).json({ status: false, message: 'Error when get list of plat.' });
      }else {
        return res.status(200).json({ status: true, plat : plats});
      }
    }
  );
}
module.exports.platfindOne = (req, res, next) => {
  Plat.findOne({ _id: req._id},
    (err, plat) => {
      if (!plat) {
        return res.status(404).json({ status: false, message: 'Error when get information of plat.' });
      }else {
        return res.status(200).json({ status: true, plat : _.pick(plat,['_id','nom','prix']) });
      }
    }
  );
}
module.exports.visibilite= (req, res, next) => {
  Plat.updateOne({ _id: req.body.idplat}, { visible: req.body.visible }, function (err, obj) {
    if (err) {
      console.log(err);
    }
  }
  );
  return res.status(200).json({ status: true, message: 'success'});
}
