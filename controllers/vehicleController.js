// controllers/vehicleController.js
const Celda = require('../models/celdaModel');
const bcrypt = require('bcryptjs');

// Crear una nueva celda (POST)
exports.crearCelda = async (req, res) => {
    try {
        const { numeroCelda, estado, } = req.body;
        const nuevaCelda = new Celda({ numeroCelda, estado });
        await nuevaCelda.save();
        res.status(201).json(nuevaCelda);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la celda' });
    }
};

// Obtener todas las celdas (GET)
exports.obtenerCeldas = async (req, res) => {
    try {
        const celdas = await Celda.find();
        res.status(200).json(celdas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las celdas' });
    }
};

// Obtener una celda específica por ID (GET)
exports.obtenerCeldaPorId = async (req, res) => {
    try {
        const celda = await Celda.findById(req.params.id);
        if (!celda) return res.status(404).json({ error: 'Celda no encontrada' });
        res.status(200).json(celda);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la celda' });
    }
};

// Actualizar una celda por ID (PUT)
exports.actualizarCelda = async (req, res) => {
    try {
        const celda = await Celda.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!celda) return res.status(404).json({ error: 'Celda no encontrada' });
        res.status(200).json(celda);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la celda' });
    }
};

// Eliminar una celda por ID (DELETE)
exports.eliminarCelda = async (req, res) => {
    try {
        const celda = await Celda.findByIdAndDelete(req.params.id);
        if (!celda) return res.status(404).json({ error: 'Celda no encontrada' });
        res.status(200).json({ message: 'Celda eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la celda' });
    }
};
