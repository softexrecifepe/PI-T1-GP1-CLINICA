const { createPatient } = require("./createPatient");
const { getAllPatients, getPatientById, getMostRecentPatient } = require("./getPatient");
const { updatePatient } = require("./updatePatient");
const { deletePatient } = require("./deletePatient");

module.exports = {
    createPatient,
    updatePatient,
    deletePatient,
    getAllPatients,
    getPatientById,
    getMostRecentPatient
};