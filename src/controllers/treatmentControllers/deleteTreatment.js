const { Treatment } = require("../../models/treatment.js")
const { Medication } = require("../../models/medication.js");
const { PatientsDailyChart } = require("../../models/patientsDailyChart.js");
require("../../models/associations.js");

const deleteTreatment = async (req, res) => {
    const { treatmentId } = req.params;

    try {
        await Medication.destroy({ where: { treatmentId } });
        await PatientsDailyChart.destroy({ where: { treatmentId } });
        await Treatment.destroy({ where: { id: treatmentId } });
        res.status(200).json({ message: 'Treatment and associated data deleted successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { deleteTreatment };