const express = require('express');
const router = express.Router();
const celdaController = require('../controllers/vehicleController');

router.post('/celdas', celdaController.crearCelda);
router.get('/celdas', celdaController.obtenerCeldas);
router.get('/celdas/:id', celdaController.obtenerCeldaPorId);
router.put('/celdas/:id', celdaController.actualizarCelda);
router.delete('/celdas/:id', celdaController.eliminarCelda);

module.exports = router;
