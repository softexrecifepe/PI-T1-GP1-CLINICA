// Import the 'Treatment' model representing the treatment entity in the database
const { Treatment } = require("../../models/treatment");

// Import associations between models (if there are relationships with other models)
require("../../models/associations.js");

// Asynchronous function to create a new treatment
async function createTreatment(req, res) {
    try {
        // Destructure the necessary data from the request body (req.body)
        const {
            exams,                 // Exams performed
            symptoms,              // Symptoms presented by the patient
            diagnosis,             // Medical diagnosis
            recomendations,        // Treatment recommendations
            isAlergic,             // Indicates if the patient has allergies
            alergicTo,             // Substances the patient is allergic to
            specialConditions,     // Special conditions of the patient (e.g., comorbidities)
            dischargePreview,      // Summary of the medical discharge
            dischargeNotes,        // Notes related to the medical discharge
        } = req.body;

        // Create a new treatment record in the database using the provided data
        const newTreatment = await Treatment.create({
            exams,
            symptoms,
            diagnosis,
            recomendations,
            isAlergic,
            alergicTo,
            specialConditions,
            dischargePreview,
            dischargeNotes,
        });

        // Return a response with status 201 (Created) and the created treatment object
        res.status(201).json(newTreatment);
    } catch (err) {
        // In case of an error, return a response with status 500 (Internal Server Error) and error details
        res.status(500).json({ Error: "Error creating treatment", details: err.message });
    }
}

// Export the 'createTreatment' function so it can be used in other files (like routes)
module.exports = {
    createTreatment
};
