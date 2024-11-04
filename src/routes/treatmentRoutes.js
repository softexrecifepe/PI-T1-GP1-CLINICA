const express = require('express');
const router = express.Router();

const treatmentControllers = require("../controllers/treatmentControllers/treatmentExports");

// Defining routes for treatment CRUD operations
router.post('/', treatmentControllers.createTreatment); // Create a new treatment
router.get('/id/:treatmentId', treatmentControllers.readTreatmentById); // Read treatment by ID
router.get('/pet/:petName', treatmentControllers.readTreatmentByPetName); // Read treatment by pet's name
router.get('/tutor/:tutorName', treatmentControllers.readTreatmentByTutorName); // Read treatment by tutor's name
router.get('/treatments', treatmentControllers.readAllTreatments); // Read all treatments
router.put('/:treatmentId', treatmentControllers.updateTreatment); // Update an existing treatment
router.delete('/:treatmentId', treatmentControllers.deleteTreatment); // Delete a treatment

// Exporting the router for use in other parts of the application
module.exports = router;