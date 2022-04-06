// modules
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const dotenv = require('dotenv');

// instance
const app = express();
const parkings = require("./routes/parkings");
const student = require("./routes/student");

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

app.use("/parkings", parkings);
app.use("/students", student);

app.listen(3000, () => {
  console.log(process.env.TOKEN_SECRET);
  console.log("Serveur à l'écoute");
});