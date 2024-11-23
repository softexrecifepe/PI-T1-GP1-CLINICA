const { Medication } = require('../../db/models/modelSequelize');

async function deleteMedication(req, res) {
    const {id} = req.params;

    try {
        const medication = await Medication.findByPk(id);
        if (!medication) {
            return res.status(404).json({ message: "Medication not fund" });
        }

        await medication.destroy();
        res.status(200).json({ message: "Medication deleted successsfully" });
      } catch (error) {
        console.error("Error deleting medication:", error);
        res.status(400).json({ error: error.message });
      }

};

module.exports = {
    deleteMedication
};