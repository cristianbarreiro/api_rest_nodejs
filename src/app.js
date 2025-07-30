const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const clientes = require("./modules/clients/routes");
const users = require("./modules/users/routes");
const error = require("./red/errors");

const app = express();

//Middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración del servidor

app.set("port", config.app.port);
app.set("env", config.app.env);

app.get("/", (req, res) => {
  res.send(`Servidor funcionando en puerto ${app.get("port")}`);
});

// Rutas de la API

app.use("/api/clients", clientes);
app.use("/api/users", users);
app.use(error);

module.exports = app;
