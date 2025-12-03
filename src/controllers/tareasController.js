// src/controllers/tareasController.js

let tareas = []; // Simulación de base de datos en memoria
let currentId = 1;

// [GET] /api/v1/tareas
exports.getTareas = (req, res) => {
    res.status(200).json(tareas);
};

// [POST] /api/v1/tareas
exports.createTarea = (req, res, next) => {
    const { titulo, descripcion } = req.body;

    if (!titulo || !descripcion) {
        // Genera un error que será capturado por el errorHandler
        const error = new Error('El título y la descripción son campos obligatorios.');
        error.statusCode = 400; 
        return next(error);
    }

    const newTarea = {
        id: currentId++,
        titulo,
        descripcion,
        completada: false
    };

    tareas.push(newTarea);
    res.status(201).json(newTarea); // 201 Created
};

// [PUT] /api/v1/tareas/:id
exports.updateTarea = (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, descripcion, completada } = req.body;

    const index = tareas.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    tareas[index] = {
        ...tareas[index],
        titulo: titulo ?? tareas[index].titulo,
        descripcion: descripcion ?? tareas[index].descripcion,
        completada: completada ?? tareas[index].completada,
    };

    res.status(200).json(tareas[index]);
};

// [DELETE] /api/v1/tareas/:id
exports.deleteTarea = (req, res) => {
    const id = parseInt(req.params.id);

    const initialLength = tareas.length;
    tareas = tareas.filter(t => t.id !== id);

    if (tareas.length === initialLength) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.status(204).send(); // 204 No Content
};