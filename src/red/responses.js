exports.success = function (req, res, message = "OK", status = 200) {
  return res.status(status).json({
    error: false,
    status: status, // Código HTTP de respuesta
    body: message, // Mensaje
  });
};

exports.error = function (
  req,
  res,
  message = "Error en la petición",
  status = 500
) {
  return res.status(status).json({
    error: true,
    status: status, // Código HTTP de error
    body: message, // Mensaje
  });
};
