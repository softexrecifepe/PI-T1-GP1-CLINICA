const { createPerson } = require("./createPerson");
const { readAllPersons, readPersonById, readPersonByName, readPersonByPhoneNumber, readPersonByPostalCode, readPersonsByRole } = require("./getPerson");
const { updatePerson } = require("./updatePerson");
const { deletePerson } = require("./updatePerson");

module.exports = {
    createPerson,
    readAllPersons,
    readPersonById,
    readPersonByName,
    readPersonByPhoneNumber,
    readPersonByPostalCode,
    readPersonsByRole,
    updatePerson,
    deletePerson
}