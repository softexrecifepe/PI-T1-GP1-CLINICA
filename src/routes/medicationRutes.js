const express = require('express');
const router = express.Router();
const controllers = require('../controllers/medicationControllers/medicationExports');

router.post('/', controllers.createMedication);
router.get('/', controllers.getAllMedication);
router.get('/:id', controllers.getMedicationById);
router.get('/name/:name', controllers.getMedicationByName);
router.put('/:id', controllers.updateMedication);
router.delete('/:id', controllers.deleteMedication);

module.exports = router;