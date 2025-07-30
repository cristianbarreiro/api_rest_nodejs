// Importa Express para crear el router
const express = require("express");

const respuesta = require("../../red/responses");
const controlador = require("./index");

// Crea una nueva instancia del router de Express
const router = express.Router();

router.get("/login", login);

async function login(req, res, next) {
  try {
    const token = await controlador.login(req.body.usuario, req.body.password);
    respuesta.success(req, res, token, 200);
  } catch (err) {
    next(err);
  }
}

// Exporta el router para que pueda ser usado
module.exports = router;
