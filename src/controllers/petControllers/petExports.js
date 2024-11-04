const {createPet} = require("./createPet");
const {deletePet} = require("./deletePet");
const {updatePet} = require("./updatePet");
const { getAllPets, getPetById, getPetByName, getMostRecentPet, getPetByTutorName } = require("./getPet");

module.exports = {
    createPet,
    deletePet,
    updatePet,
    getAllPets,
    getPetById,
    getPetByName,
    getMostRecentPet,
    getPetByTutorName
}