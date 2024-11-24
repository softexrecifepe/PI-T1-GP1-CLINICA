const express = require("express");
const router = express.Router();
const controllers = require("../controllers/petControllers/petExports");

router.get('/all', controllers.getAllPets);
router.get('/id/:id', controllers.getPetById);
router.get('/name/:name', controllers.getPetByName);
router.get('/recent', controllers.getMostRecentPet);
router.get('/tutor/:tutorName', controllers.getPetByTutorName);
router.post('/', controllers.createPet);
router.put('/:id', controllers.updatePet);
router.delete('/:id', controllers.deletePet);

module.exports = router