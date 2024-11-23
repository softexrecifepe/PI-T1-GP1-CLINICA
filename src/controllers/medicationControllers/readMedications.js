const {Medication} = require('../../models/medication');

async function getMedicationById(req, res) {
    const {id} = req.params;
    try{
        const medication = await Medication.findByPk(id);
        if (!medication) {
            return res.status(400).json({message: "Medication not found"});
        }
        res.status(200).json(medication);
    } catch (error) {
        console.error("Error fetching medication by ID:", error);
        res.status(400).json({error: error.message});
    }
    
}

async function getMedicationByName(req, res) {
    const { name } = req.params;  // O nome vem de req.params.name

    // Verifica se o nome foi passado corretamente
    console.log("Searching for medication with name:", name);

    try {
        // A consulta busca pelo nome correto (que é uma string)
        const medication = await Medication.findOne({ where: { name: name } });

        if (!medication) {
            return res.status(404).json({ message: "Medication not found" });
        }

        res.status(200).json(medication);
    } catch (error) {
        console.error("Error fetching medication by name:", error);
        res.status(400).json({ error: error.message });
    }
}




async function getAllMedication(req, res) {
    try {
        const medications = await Medication.findAll();
        res.status(200).json(medications);
    } catch (error) {
        console.error("Error fetching medications:", error);
        res.status(400).json({error: error.message});
    }
    
}

module.exports = {
    getMedicationById,
    getMedicationByName,
    getAllMedication
}