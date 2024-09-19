const mongoose = require('mongoose');

const CeldaSchema = new mongoose.Schema({
    numeroCelda: { type: Number, unique: true, required: true },
    estado: { type: String, enum: ['disponible', 'no disponible'], default: 'disponible' },
    placaVehiculo: { type: String, maxlength: 6 },
    fechaIngreso: { type: Date },
    fechaSalida: { type: Date },
    pin: { type: String }
});

module.exports = mongoose.model('Celda', CeldaSchema);
