const express = require("express");
const config = require("./config");

const app = express();

app.set("port", config.app.port);
app.set("env", config.app.env);

app.get("/", (req, res) => {
  res.send(`Servidor funcionando en puerto ${app.get("port")}`);
});

module.exports = app;
