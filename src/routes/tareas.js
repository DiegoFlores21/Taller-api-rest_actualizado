// src/routes/tareas.js

const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');

// Definición de Endpoints REST (Cumple Requisito: endpoints REST GET, POST, PUT, DELETE)
// Ruta base: /api/v1/tareas
router.get('/', tareasController.getTareas);       // GET (Listar todas)
router.post('/', tareasController.createTarea);    // POST (Crear nueva)
router.put('/:id', tareasController.updateTarea);  // PUT (Actualizar por ID)
router.delete('/:id', tareasController.deleteTarea);// DELETE (Eliminar por ID)

module.exports = router;