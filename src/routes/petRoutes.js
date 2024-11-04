const express = require("express");
const router = express.Router();
const controllers = require("../controllers/petControllers/petExports")


// Rota para ver todos os pets
router.get('/all', controllers.getAllPets);

// Rota para ver um pet por ID
router.get('/id/:id', controllers.getPetById);

// Rota para ver pets por nome
router.get('/name/:name', controllers.getPetByName);

// Rota para ver o pet adicionado mais recentemente
router.get('/recent', controllers.getMostRecentPet);

// Rota para ver os pets atraves do nome do tutor
router.get('/tutor/:tutorName', controllers.getPetByTutorName);

// Rota para criar um novo pet
router.post('/', controllers.createPet);

// Rota para atualizar um pet por ID
router.put('/:id', controllers.updatePet);

// Rota para deletar um pet por ID
router.delete('/:id', controllers.deletePet);

module.exports = router