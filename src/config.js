require("dotenv").config();

module.exports = {
  app: {
    port: process.env.PORT || 4000,
    env: process.env.NODE_ENV || "development",
    host: process.env.HOST || "localhost",
  },
};
