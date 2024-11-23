const express = require('express');
const router = express.Router();

const treatmentControllers = require("../controllers/treatmentControllers/treatmentExports");

router.post('/', treatmentControllers.createTreatment); 
router.get('/id/:treatmentId', treatmentControllers.readTreatmentById); 
router.get('/pet/:petName', treatmentControllers.readTreatmentByPetName); 
router.get('/tutor/:tutorName', treatmentControllers.readTreatmentByTutorName); 
router.get('/treatments', treatmentControllers.readAllTreatments); 
router.put('/:treatmentId', treatmentControllers.updateTreatment); 
router.delete('/:treatmentId', treatmentControllers.deleteTreatment); 


module.exports = router;