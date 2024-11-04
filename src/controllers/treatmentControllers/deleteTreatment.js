const { Treatment } = require("../../models/treatment.js")
const { Medication } = require("../../models/medication.js");
const { PatientsDailyChart } = require("../../models/patientsDailyChart.js");
require("../../models/associations.js");

// Function to delete a treatment and its associated data
const deleteTreatment = async (req, res) => {
    // Getting the treatment ID to be deleted
    const { treatmentId } = req.params;

    try {
        // Deleting associated medications
        await Medication.destroy({ where: { treatmentId } });
        // Deleting associated daily charts
        await PatientsDailyChart.destroy({ where: { treatmentId } });
        // Deleting the treatment
        await Treatment.destroy({ where: { id: treatmentId } });

        // Responding with a success message
        res.status(200).json({ message: 'Treatment and associated data deleted successfully.' });
    } catch (error) {
        // Error handling when deleting the treatment
        res.status(400).json({ error: error.message });
    }
};

// Exporting the function for use in other parts of the application
module.exports = { deleteTreatment };