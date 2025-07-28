// Importa Express para crear el router
const express = require("express");

const respuesta = require("../../red/responses");
const controlador = require("./controlador");

// Crea una nueva instancia del router de Express
const router = express.Router();

// Importa la configuración de la app
const config = require("../../config");

// Define la ruta GET principal ('/') para la API de clientes
router.get("/", function (req, res) {
  const todos = controlador.todos().then((items) => {
    respuesta.success(req, res, items, 200);
  });
});

// Exporta el router para que pueda ser usado
module.exports = router;
