// Importa Express para crear el router
const express = require("express");

const respuesta = require("../red/responses");

// Crea una nueva instancia del router de Express
const router = express.Router();

// Importa la configuración de la app
const config = require("../../config");

// Define la ruta GET principal ('/') para la API de clientes
router.get("/", function (req, res) {
  respuesta.success(
    req,
    res,
    `Clientes API funcionando en puerto ${config.app.port}`,
    200
  );
  res.send(`Clientes API funcionando en puerto ${config.app.port}`);
});

// Exporta el router para que pueda ser usado en otras partes de la aplicación (por ejemplo, en app.js)
module.exports = router;
