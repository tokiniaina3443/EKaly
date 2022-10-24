const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const nodemailer = require("nodemailer");

const User = mongoose.model("User");

var transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "contactclient6651@gmail.com",
    pass: "contact6651.",
  },
});

module.exports.register = (req, res, next) => {
  var user = new User();
  var profil = req.body.profil;
  if (profil == "") {
    profil = "client";
  }
  user.profil = profil;
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err, doc) => {
    if (!err) {
      transport
        .sendMail({
          from: req.body.email,
          to: req.body.email,
          subject: "Welcome to e-kaly",
          html: ` <h2>Hello </h2>
                    <p>Thank you for registering</p>
                    <p>Username (mail): ${req.body.email}</p>
                    <p>Password: ${req.body.password}</p>
                `,
        })
        .catch((err) => console.log(err));
      res.send(doc);
    } else {
      if (err.code == 11000) {
        res.status(422).send(["Duplicate email found."]);
      } else {
        return next(err);
      }
    }
  });
};

module.exports.authenticate = (req, res, next) => {
  // call for authentication
  passport.authenticate("local", (err, user, info) => {
    //error from passport middleware
    if (err) return res.status(400).json(err);
    // registered user
    else if (user) return res.status(200).json({ token: user.generateJwt() });
    // unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
};

module.exports.userlist = (req, res, next) => {
  User.find({}, (err, users) => {
    if (!users) {
      return res
        .status(404)
        .json({ status: false, message: "Error when get list of user." });
    } else {
      return res.status(200).json({ status: true, user: users });
    }
  });
};
module.exports.infoget = (req, res, next) => {
  User.findOne({ _id: req._id }, (err, user) => {
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
    } else {
      req.profil = _.pick(user, ["profil", "email"]);
      next();
    }
  });
};
module.exports.gotoprofil = (req, res, next) => {
  var profil = req["profil"]["profil"];
  if (profil == "responsable") {
    return res.status(200).json({ status: true, profil: "responsable" });
  } else if (profil == "livreur") {
    return res.status(200).json({ status: true, profil: "livreur" });
  } else if (profil == "restaurant") {
    return res.status(200).json({ status: true, profil: "restaurant" });
  } else if (profil == "client") {
    return res.status(200).json({ status: true, profil: "client" });
  } else {
    return res
      .status(404)
      .json({ status: false, message: "Profil of user not found" });
  }
};
