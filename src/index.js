// modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

// instance
const app = express();
const Restaurant = require("./routes/restaurant.route");
const Ekaly = require("./routes/ekaly.route");

app.use(express.json());

// get config vars
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

app.listen(3000, () => {
  console.log("Serveur à l'écoute");
});
