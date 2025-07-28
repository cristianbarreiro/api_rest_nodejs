// Carga las variables de entorno desde el archivo .env
require("dotenv").config();

// Exporta la configuración de la aplicación
module.exports = {
  app: {
    port: process.env.PORT || 4000,
    env: process.env.NODE_ENV || "development",
    host: process.env.HOST || "localhost",
  },
};
