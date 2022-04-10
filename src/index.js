// modules
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors');
const dotenv = require('dotenv');

// instance
const app = express();
app.use(cors());
app.use(express.json());

const Restaurant = require("./routes/restaurant.route");
const Ekaly = require("./routes/ekaly.route");
const Client = require("./routes/client.route");
const Livreur = require("./routes/livreur.route");


// get config 
dotenv.config();


const url = "mongodb://localhost:27017";
const dbName = "EKaly";

//connection a mongoose
mongoose.connect("mongodb://localhost:27017/Test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connecté à Mongoose");
});

app.use("/restaurants", Restaurant);
app.use("/ekalys", Ekaly);
app.use("/clients", Client);
app.use("/livreurs", Livreur);

app.listen(3000, () => {
  console.log("Serveur à l'écoute");
});
