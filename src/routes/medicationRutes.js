const express = require('express');
const router = express.Router();

const { createMedication, getMedicationById, getMedicationByName, getAllMedication, updateMedication, deleteMedication } = require('../exports/medicationExports');

router.post('/', createMedication);
router.get('/', getAllMedication);
router.get('/:id', getMedicationById);
router.get('/name/:name', getMedicationByName);
router.put('/:id', updateMedication);
router.delete('/:id', deleteMedication);

module.exports = router;