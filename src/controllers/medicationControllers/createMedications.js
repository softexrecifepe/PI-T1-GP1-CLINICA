const {Medication} = require('../../models/medication');

async function createMedication(req, res) {
    const {name, doseByKg, administrationRoute, administredAt, frequency, isAdministred, treatmentId} = req.body;

    if (frequency.length > 10) {
        return res.status(400).json({error: "Frequency value is too long, max length is 10 characters"});
    }

    try {
        const medication = await Medication.create({
            name,
            doseByKg,
            administrationRoute,
            administredAt,
            frequency,
            isAdministred,
            treatmentId
        });

        console.log("Created medication:", medication);

        res.status(201).json({
            message: "Medication created successfully",
            medication: medication.get({ plain: true })
        });
        } catch (error) {
        console.error("Error creating medication:", error);
        console.error("Full error:", error.stack);
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createMedication
};