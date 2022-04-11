// modules
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const dotenv = require("dotenv");

// instance
const path = "./static/";
const pathapi = "/api/";
const app = express();
app.use(express.static(path));
app.use(express.json());

const Restaurant = require("./src/routes/restaurant.route");
const Ekaly = require("./src/routes/ekaly.route");
const Client = require("./src/routes/client.route");
const Livreur = require("./src/routes/livreur.route");

// get config
dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.mongoProd;
const dbName = process.env.databaseProd;

//connection a mongoose
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connecté à Mongoose");
});

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});
app.use(pathapi + "restaurants", Restaurant);
app.use(pathapi + "ekalys", Ekaly);
app.use(pathapi + "clients", Client);
app.use(pathapi + "livreurs", Livreur);

app.listen(port, () => {
  console.log("Serveur à l'écoute sur le port " + port);
});
