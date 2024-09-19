const express = require('express');
const router = express.Router();
const celdaController = require('../controllers/vehicleController');

// Rutas existentes
router.post('/celdas', celdaController.crearCelda);
router.get('/celdas', celdaController.obtenerCeldas);
router.get('/celdas/:id', celdaController.obtenerCeldaPorId);
router.put('/celdas/:id', celdaController.actualizarCelda);
router.delete('/celdas/:id', celdaController.eliminarCelda);

// Nueva ruta para /parking
router.get('/parking', (req, res) => {
    res.json({ message: 'Esta es la ruta GET para /parking' });
});

module.exports = router;
