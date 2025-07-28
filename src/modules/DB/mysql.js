const mysql = require("mysql2/promise");
const config = require("../../config");

function todos(tabla) {
  return "Todos";
}

function uno(tabla, id) {}

function agregar(tabla, datos) {}

function eliminar(tabla, id) {}

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};
// Carga las variables de entorno desde el archivo .env
require("dotenv").config();
