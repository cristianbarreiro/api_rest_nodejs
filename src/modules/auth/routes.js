// Importa Express para crear el router
const express = require("express");

const respuesta = require("../../red/responses");
const controlador = require("./index");

// Crea una nueva instancia del router de Express
const router = express.Router();

// Exporta el router para que pueda ser usado
module.exports = router;
