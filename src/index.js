// Importa la aplicación Express desde el archivo app.js
const app = require("./app");

// Inicia el servidor y lo pone a escuchar en el puerto configurado
app.listen(app.get("port"), () => {
  // Muestra en consola que el servidor está corriendo y en qué puerto
  console.log(`Server is running on port ${app.get("port")}`);

  // Muestra en consola el entorno actual (development, production, etc.)
  console.log(`Environment: ${app.get("env")}`);
});
