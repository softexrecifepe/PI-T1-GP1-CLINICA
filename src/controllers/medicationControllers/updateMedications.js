const { Medication } = require('../../db/models/modelSequelize');

async function updateMedication(req, res) {
    const {id} = req.params;
    const {name, doseByKg, administrationRoute, administredAt, frenquency, isAdministred, treatmentId} = req.body;

    try {
        const medication = await Medication.findByPk(id);
        if(!medication) {
            return res.status(400).json({ message: "Medication not found"});
        }

        medication.name = name || medication.name;
        medication.doseByKg = doseByKg || medication.doseByKg;
        medication.administrationRoute = administrationRoute || medication.administrationRoute;
        medication.administredAt = administredAt || medication.administredAt;
        medication.frenquency = frenquency || medication.frenquency;
        medication.isAdministred = isAdministred || medication.isAdministred;
        medication.treatmentId = treatmentId || medication.treatmentId;

        await medication.save();
        res.status(200).json(medication);
    } catch (error) {
        console.error("Error updating medication:", error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    updateMedication
 };




