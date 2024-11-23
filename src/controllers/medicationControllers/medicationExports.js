const { createMedication } = require('../controllers/medicationControllers/createMedications');
const { getMedicationById, getMedicationByName, getAllMedication } = require('../controllers/medicationControllers/readMedications');
const { updateMedication } = require('../controllers/medicationControllers/updateMedications');
const { deleteMedication } = require('../controllers/medicationControllers/deleteMedications');

module.exports = {
    createMedication,
    getMedicationById,
    getMedicationByName,
    getAllMedication,
    updateMedication,
    deleteMedication
};