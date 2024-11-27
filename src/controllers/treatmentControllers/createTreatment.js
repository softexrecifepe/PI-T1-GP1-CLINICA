const { Treatment } = require("../../models/treatment");
require("../../models/associations.js");

async function createTreatment(req, res) {
    try {
        const {
            exams,     
            symptoms,    
            diagnosis,             
            recomendations,       
            isAlergic,         
            alergicTo,            
            specialConditions,    
            dischargePreview,   
            dischargeNotes,       
        } = req.body;

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

        res.status(201).json({
            message: "Treatment created successfully",
            treatmente: newTreatment
        });
    } catch (err) {
        res.status(500).json({ Error: "Error creating treatment", details: err.message });
    }
}

module.exports = {
    createTreatment
};
