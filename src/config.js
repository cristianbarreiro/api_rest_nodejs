// Carga las variables de entorno desde el archivo .env
require("dotenv").config();

// Exporta la configuración de la aplicación
module.exports = {
  app: {
    port: process.env.PORT || 4000,
    env: process.env.NODE_ENV || "development",
    host: process.env.HOST || "localhost",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecreta!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "ejemplo",
  },
};
