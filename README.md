# Proyecto API REST con Node.js y Express

Este proyecto es una API REST básica usando Node.js, Express y configuración con dotenv para variables de entorno.

---

## Requisitos

- Node.js v14+ instalado
- npm (v6+)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

2. Instalar dependencias:

```bash
npm init
npm i express nodemon
npm install
npm install dotenv -D
npm install express dotenv
npm install --save-dev nodemon
npm i mysql
npm install mysql2
npm i morgan
```

3. Crear archivo `.env` en la raíz con el siguiente contenido:

```
PORT=4000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=ejemplo
NODE_ENV=development
```

---

## Scripts disponibles

- **Iniciar en modo desarrollo (con nodemon):**

```bash
npm run dev
```

Esto ejecuta el servidor y reinicia automáticamente cuando detecta cambios en los archivos.

- **Iniciar servidor manualmente:**

```bash
npm start
```

---

## Estructura del proyecto

```
/api_rest_nodejs
├─ package.json
├─ .env
└─ src
   ├─ index.js       # Punto de entrada
   ├─ app.js         # Configuración de Express
   └─ config.js      # Configuración y carga de variables de entorno
```

---

## Uso

Al ejecutar `npm run dev`, el servidor arrancará y estará escuchando en el puerto configurado en `.env` (por defecto 4000).

Abrir en el navegador o hacer requests a:

```
http://localhost:4000/
```

Debería responder con:

```
Servidor funcionando en puerto 4000
```

---

## Dependencias principales

- [express](https://www.npmjs.com/package/express) - Framework web para Node.js
- [dotenv](https://www.npmjs.com/package/dotenv) - Manejo de variables de entorno
- [nodemon](https://www.npmjs.com/package/nodemon) - Reinicio automático en desarrollo

---

## Buenas prácticas

- No subir el archivo `.env` al repositorio (ya está en `.gitignore`)
- Usar variables de entorno para configurar puertos y entornos
- Usar nodemon en desarrollo para agilizar cambios

---

## Contacto

Para dudas o sugerencias, contacta a cristianbarreirofag@gmail.com

---

## Licencia

MIT License
