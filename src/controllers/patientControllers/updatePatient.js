const { Patient } = require("../../models/patient.js");
require("../../models/associations.js");

async function updatePatient (req, res) {
    try {
        const { id } = req.params;
        const {petId, cageId, ...patientData} = req.body;

        const patient = await Patient.findByPk(id);
        if (!patient) return res.status(404).json({error: 'Paciente não encontrado'});

        await patient.update(patientData);

        if (petId) await patient.setPet(petId);
        if (cageId) await patient.setCage(cageId);

        res.status(200).json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao atualizar o paciente.'});
    }
};

module.exports = { updatePatient };