const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const handleError = require("./middlewares/error.middleware");
const mongoose = require("mongoose");
const { userRoutes } = require("./routes");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

mongoose
  .connect(process.env.MDB_URI)
  .then(() => {
    console.log("Connected to Mongo DataBase");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Welcome to HeroesApp api");
  console.log("Welcome to server 'HeroesApp'");
});

app.use('/api/v1', userRoutes);

app.use(handleError);

module.exports = app;
