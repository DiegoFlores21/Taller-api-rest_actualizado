// src/middlewares/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Muestra el error en la consola del servidor

    // 500 es el valor por defecto (Internal Server Error)
    const statusCode = err.statusCode || 500; 

    res.status(statusCode).json({
        success: false,
        message: err.message || 'Error interno del servidor. Algo salió mal.',
    });
};

module.exports = errorHandler;