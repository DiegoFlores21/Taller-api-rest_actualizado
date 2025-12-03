// app.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Importar el middleware de manejo de errores
const errorHandler = require('./src/middlewares/errorHandler');

// 1. Middleware para analizar JSON (Cumple Requisito: Middlewares para análisis de JSON)
app.use(express.json());

// Importar rutas
const tareasRouter = require('./src/routes/tareas');

// 2. Conexión de Rutas
// Todas las rutas de tareas estarán bajo /api/v1/tareas
app.use('/api/v1/tareas', tareasRouter);

// 3. Middleware de Manejo de Errores (Cumple Requisito: Manejo de errores)
// Debe ir después de todas las rutas.
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor de Tareas (Node.js/Express) corriendo en http://localhost:${PORT}`);
});