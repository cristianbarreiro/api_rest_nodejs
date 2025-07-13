const express = require("express");
const config = require("./config");

const clientes = require("./modules/clients/routes");

const app = express();

//configuracion

app.set("port", config.app.port);
app.set("env", config.app.env);

app.get("/", (req, res) => {
  res.send(`Servidor funcionando en puerto ${app.get("port")}`);
});

//rutas
app.use("/api/clients", clientes);

module.exports = app;
