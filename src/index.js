const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://api_semana:api_semana@cluster0-ebw4o.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

// midleware é uma fucao que recebe req e res.
// interceptador de requisicoes
app.get("/", (req, res) => {
  return res.send(`Olá ${req.query.name}`);
});

app.listen(3333);
