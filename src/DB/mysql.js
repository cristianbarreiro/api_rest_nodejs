const mysql = require("mysql");
const config = require("../config");

const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let conexion;

function conMysql() {
  conexion = mysql.createConnection(dbconfig);
  conexion.connect((err) => {
    if (err) {
      console.error("Error de conexión a la base de datos:", err);
      setTimeout(conMysql, 200);
    }
    console.log("Conexión exitosa a la base de datos MySQL");
  });

  conexion.on("error", (err) => {
    console.log("[db err]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      conMysql();
    } else {
      throw err;
    }
  });
}

conMysql();

function todos(tabla) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${tabla}`;
    conexion.query(query, (err, results) => {
      return err ? reject(err) : resolve(results);
    });
  });
}

function uno(tabla, id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${tabla} WHERE id=${id}`;
    conexion.query(query, (err, results) => {
      return err ? reject(err) : resolve(results);
    });
  });
}

function insertar(tabla, data) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO ${tabla} SET ?`;
    conexion.query(query, data, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function actualizar(tabla, data) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE ${tabla} SET ? WHERE id = ?`;
    conexion.query(query, [data, data.id], (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function agregar(tabla, data) {
  if (!data.id || data.id == 0) {
    return insertar(tabla, data);
  } else {
    return actualizar(tabla, data);
  }
}

function eliminar(tabla, data) {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM ${tabla} WHERE id = ?`;
    conexion.query(query, data.id, (err, results) => {
      return err ? reject(err) : resolve(results);
    });
  });
}

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};

// Carga las variables de entorno desde el archivo .env
require("dotenv").config();
