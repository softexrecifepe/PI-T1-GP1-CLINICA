const { Patient } = require("../../models/patient");
require("../../models/associations");

async function createPatient (req, res) {
    try {
        const { petId, cageId, ...patientData } = req.body;
        
        if (!patientData.admission || !patientData.atArrivalPatientStatus) {
            return res.status(400).json({error: "Campos obrigatórios faltando ou inválidos"});
        }

        const newPatient = await Patient.create(patientData);

        if (petId) await newPatient.setPet(petId);
        if (cageId) await newPatient.setCage(cageId);

        res.status(201).json(newPatient);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao criar o paciente.'});
    }
};

module.exports = { createPatient };