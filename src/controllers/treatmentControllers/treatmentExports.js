const { createTreatment } = require('./createTreatment');
const { readTreatmentById, readTreatmentByPetName, readTreatmentByTutorName, readAllTreatments } = require('./readTreatment');
const { updateTreatment } = require('./updateTreatment');
const { deleteTreatment } = require('./deleteTreatment');

module.exports = {
    createTreatment, 
    readTreatmentById, 
    readTreatmentByPetName, 
    readTreatmentByTutorName, 
    readAllTreatments, 
    updateTreatment, 
    deleteTreatment 
};
