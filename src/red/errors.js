const response = require("./responses");

function errors(err, req, res, next) {
  console.error("[error", err);

  const message = err.message || "Internal Server Error";
  const status = err.statusCode || 500;
  const body = {
    error: true,
    status: status,
    body: message,
  };
  response.error(req, res, body, status);
}

module.exports = errors;
