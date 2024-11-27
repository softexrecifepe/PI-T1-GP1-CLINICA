const { Treatment } = require("../../models/treatment.js")
require("../../models/associations.js");

const updateTreatment = async (req, res) => {
  const { treatmentId } = req.params;

  const updateData = {
    exams: req.body.exams,                        
    symptoms: req.body.symptoms,                
    diagnosis: req.body.diagnosis,                
    recomendations: req.body.recomendations,      
    isAlergic: req.body.isAlergic,               
    alergicTo: req.body.alergicTo || null,        
    specialConditions: req.body.specialConditions || null, 
    dischargePreview: req.body.dischargePreview,  
    dischargeNotes: req.body.dischargeNotes || null 
  };

  console.log(`Updating treatment with ID: ${treatmentId}`, updateData);

  try {
    const treatment = await Treatment.findByPk(treatmentId);
    if (!treatment) {
      return res.status(404).json({ message: 'Treatment not found' });
    }
    await treatment.update(updateData);
    res.status(200).json({
      message: "Treatment updated sucessfully",
      treatment
    });
  } catch (error) {
    console.error('Error updating treatment:', error);
    res.status(500).json({ message: 'An error occurred while updating the treatment', error: error.message });
  }
};

module.exports = { updateTreatment };
