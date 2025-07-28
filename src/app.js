const express = require("express");
const config = require("./config");

const clientes = require("./modules/clients/routes");

const app = express();

// Configuración del servidor

app.set("port", config.app.port);
app.set("env", config.app.env);

app.get("/", (req, res) => {
  res.send(`Servidor funcionando en puerto ${app.get("port")}`);
});

// Rutas de la API

app.use("/api/clients", clientes);

module.exports = app;
