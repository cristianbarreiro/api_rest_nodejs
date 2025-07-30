const TABLA = "users";

const auth = require("../auth");

module.exports = function (dbInyectada) {
  let db = dbInyectada;

  if (!db) {
    db = require("../../DB/mysql");
  }

  function todos() {
    return db.todos(TABLA);
  }

  function uno(id) {
    return db.uno(TABLA, id);
  }

  async function agregar(body) {
    const usuario = {
      id: body.id,
      nombre: body.nombre,
      activo: body.activo,
    };

    const response = await db.agregar(TABLA, usuario);
    console.log("respuesta", response);
    var insertId = 0;
    if (body.id == 0) {
      insertId = response.insertId;
    } else {
      insertId = body.id;
    }

    var response2 = "";
    if (body.usuario || body.password) {
      response2 = await auth.agregar({
        id: insertId,
        usuario: body.usuario,
        password: body.password,
      });
    }

    return response2;
  }

  function eliminar(body) {
    return db.eliminar(TABLA, body);
  }

  return {
    todos,
    uno,
    agregar,
    eliminar,
  };
};
