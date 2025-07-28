// Función para responder exitosamente
exports.success = function (req, res, message = "OK", status = 200) {
  return res.status(status).json({
    error: false, // Indica que no hubo error
    status: status, // Código HTTP de respuesta
    body: message, // Mensaje o contenido devuelto
  });
};

// Función para responder con error
exports.error = function (
  req,
  res,
  message = "Error en la petición",
  status = 500
) {
  return res.status(status).json({
    error: true, // Indica que hubo un error
    status: status, // Código HTTP de error
    body: message, // Mensaje o contenido del error
  });
};
