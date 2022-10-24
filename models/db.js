const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/EkalyDB", (err) => {
  if (!err) {
    console.log("Connection MongoDB success.");
  } else {
    console.log(
      "Error Connection MongoDB : " + JSON.stringify(err, undefined, 2)
    );
  }
});

require("./user.model");
require("./plat.model");
require("./commande.model");
require("./infocommande.model");
require("./commandemere.model");
