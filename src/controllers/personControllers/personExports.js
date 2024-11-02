const { createPerson } = require("./createPerson");
const { readAllPersons, readPersonById, readPersonByName, readPersonByPhoneNumber, readPersonByPostalCode, readPersonsByRole } = require("./getPerson");
const { updatePersonById } = require("./updatePerson");
const { deletePersonById } = require("./deletePerson");

module.exports = {
    createPerson,
    readAllPersons,
    readPersonById,
    readPersonByName,
    readPersonByPhoneNumber,
    readPersonByPostalCode,
    readPersonsByRole,
    updatePersonById,
    deletePersonById
}