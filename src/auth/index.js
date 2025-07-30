const jwt = require("jsonwebtoken");
const config = require("../config");
const error = require("../middleware/errors");

const secret = config.jwt.secret;

function asignarToken(data) {
  return jwt.sign(data, secret); // Token
}

function verificarToken(token) {
  return jwt.verify(token, secret);
}

const chequearToken = {
  confirmarToken: function (req, id) {
    const decodificado = decodeCabecera(req);

    //No permitir que un usuario modifique a otro
    if (decodificado.id !== id) {
      throw error("No puedes hacer eso", 401);
    }
  },
};

function obtenerToken(autorizacion) {
  if (!autorizacion) {
    throw error("No viene token", 401);
  }

  if (autorizacion.indexOf("Bearer ") === -1) {
    throw error("Formato de token incorrecto", 401);
  }

  let token = autorizacion.replace("Bearer ", "");

  return token;
}

function decodeCabecera(req) {
  const autorizacion = req.headers.authorization || "";
  const token = obtenerToken(autorizacion);
  const decodificado = verificarToken(token);

  req.user = decodificado;

  return decodificado;
}

module.exports = {
  asignarToken,
  chequearToken,
};
