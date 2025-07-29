// Importa Express para crear el router
const express = require("express");

const respuesta = require("../../red/responses");
const controlador = require("./controlador");

// Crea una nueva instancia del router de Express
const router = express.Router();

// Importa la configuración de la app
const config = require("../../config");

router.get("/", todos);
router.get("/:id", uno);

// Define la ruta GET principal ('/') para la API de clientes
async function todos(req, res) {
  try {
    const items = await controlador.todos();
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err.message, 500);
  }
}

async function uno(req, res) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err.message, 500);
  }
}

// Exporta el router para que pueda ser usado
module.exports = router;
