const { createMedication } = require('./createMedications');
const { getMedicationById, getMedicationByName, getAllMedication } = require('./readMedications');
const { updateMedication } = require('./updateMedications');
const { deleteMedication } = require('./deleteMedications');

module.exports = {
    createMedication,
    getMedicationById,
    getMedicationByName,
    getAllMedication,
    updateMedication,
    deleteMedication
};