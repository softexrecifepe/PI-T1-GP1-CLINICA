const { createPerson } = require("./createPerson");
const { readAllPersons, readPersonById, readPersonByName, readPersonByPhoneNumber, readPersonByPostalCode, readPersonsByRole, readAllPersonCompleteRegister, readPersonCompleteRegisterById} = require("./getPerson");
const { updatePersonById } = require("./updatePerson");
const { deletePersonById } = require("./deletePerson");

module.exports = {
    createPerson,
    readAllPersons,
    readPersonById,
    readPersonByName,
    readPersonByPhoneNumber,
    readPersonByPostalCode,
    readAllPersonCompleteRegister,
    readPersonCompleteRegisterById,
    readPersonsByRole,
    updatePersonById,
    deletePersonById
}