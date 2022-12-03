const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const handleError = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
    res.send('Welcome to HeroesApp api')
  console.log("Welcome to server 'HeroesApp'");
});

app.use(handleError);

module.exports = app;
