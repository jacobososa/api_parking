const mongoose = require('mongoose');

const CeldaSchema = new mongoose.Schema({
    numeroCelda: { type: Number, required: true },
    estado: { type: String, required: true },
    placaVehiculo: { type: String, default: '' },
    fechaIngreso: { type: Date, default: null },
    fechaSalida: { type: Date, default: null },
    pin: { type: String, default: '' }
});

module.exports = mongoose.model('Celda', CeldaSchema);
