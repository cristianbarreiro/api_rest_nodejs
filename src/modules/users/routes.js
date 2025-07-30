// Importa Express para crear el router
const express = require("express");

const respuesta = require("../../red/responses");
const controlador = require("./index");

// Crea una nueva instancia del router de Express
const router = express.Router();

// Importa la configuración de la app
const config = require("../../config");

router.get("/", todos);
router.get("/:id", uno);
router.post("/", agregar);
router.put("/", eliminar);

// Define la ruta GET principal ('/') para la API de clientes
async function todos(req, res, next) {
  try {
    const items = await controlador.todos();
    respuesta.success(req, res, items, 200);
  } catch (err) {
    next(err);
  }
}

async function uno(req, res, next) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    next(err);
  }
}

async function agregar(req, res, next) {
  try {
    const result = await controlador.agregar(req.body);
    const message =
      req.body.id == 0
        ? "Item guardado satisfactoriamente"
        : "Item actualizado satisfactoriamente";

    respuesta.success(req, res, { message, result }, 201);
  } catch (err) {
    next(err);
  }
}

async function eliminar(req, res, next) {
  try {
    const items = await controlador.eliminar(req.body);
    respuesta.success(req, res, "Item eliminado satisfactoriamente", 200);
  } catch (err) {
    next(err);
  }
}

// Exporta el router para que pueda ser usado
module.exports = router;
