const express = require("express");
const router = express.Router();
const config = require("../../config");

router.get("/", function (req, res) {
  res.send(`Clientes API funcionando en puerto ${config.app.port}`);
});

module.exports = router;
