const { Treatment } = require("../../models/treatment.js")
require("../../models/associations.js");


// Asynchronous function to update an existing treatment
const updateTreatment = async (req, res) => {
  // Destructure the treatment ID from the request parameters
  const { treatmentId } = req.params;

  // Prepare the data to be updated, destructuring from the request body
  const updateData = {
    exams: req.body.exams,                        // Exams performed
    symptoms: req.body.symptoms,                  // Symptoms of the patient
    diagnosis: req.body.diagnosis,                // Diagnosis made
    recomendations: req.body.recomendations,      // Recommendations for treatment
    isAlergic: req.body.isAlergic,               // Indicates if the patient is allergic
    alergicTo: req.body.alergicTo || null,        // What the patient is allergic to, or null if not applicable
    specialConditions: req.body.specialConditions || null, // Special conditions, or null if not applicable
    dischargePreview: req.body.dischargePreview,  // Expected discharge date
    dischargeNotes: req.body.dischargeNotes || null // Discharge notes, or null if not applicable
  };

  // Log the treatment ID and the data to be updated for debugging
  console.log(`Updating treatment with ID: ${treatmentId}`, updateData);

  try {
    // Attempt to find the treatment by its primary key (ID)
    const treatment = await Treatment.findByPk(treatmentId);

    // If no treatment is found, return a 404 error response
    if (!treatment) {
      return res.status(404).json({ message: 'Treatment not found' });
    }

    // If found, update the treatment with the new data
    await treatment.update(updateData);
    // Return the updated treatment with a status of 200 (OK)
    res.status(200).json(treatment);
  } catch (error) {
    // If an error occurs, log the error details for debugging
    console.error('Error updating treatment:', error);
    // Return a 500 error response with a message and the error details
    res.status(500).json({ message: 'An error occurred while updating the treatment', error: error.message });
  }
};

// Export the updateTreatment function for use in other modules
module.exports = { updateTreatment };
