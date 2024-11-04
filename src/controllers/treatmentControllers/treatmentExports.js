const { createTreatment } = require('./createTreatment');
const { readTreatmentById, readTreatmentByPetName, readTreatmentByTutorName, readAllTreatments } = require('./readTreatment');
const { updateTreatment } = require('./updateTreatment');
const { deleteTreatment } = require('./deleteTreatment');

// Export an object containing all functions related to treatments
module.exports = {
    createTreatment, // Function to create a new treatment
    readTreatmentById, // Function to read a specific treatment by ID
    readTreatmentByPetName, // Function to read treatments based on the pet's name
    readTreatmentByTutorName, // Function to read treatments based on the tutor's name
    readAllTreatments, // Function to read all treatments
    updateTreatment, // Function to update an existing treatment
    deleteTreatment // Function to delete a treatment
};
