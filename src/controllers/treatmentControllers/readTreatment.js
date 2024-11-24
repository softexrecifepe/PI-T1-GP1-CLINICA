const { Treatment } = require("../../models/treatment.js")
const { Medication } = require("../../models/medication.js");
const { PatientsDailyChart } = require("../../models/patientsDailyChart.js");
const { Pet } = require("../../models/pet");
const { PersonRegister } = require("../../models/personRegister.js");
const { Patient } = require("../../models/patient.js");
const { Role } = require("../../models/role.js");
require("../../models/associations.js");

const readTreatmentById = async (req, res) => {
    const { treatmentId } = req.params;

    try {
        const treatment = await Treatment.findByPk(treatmentId, {
            include: [
                {model: Medication, 
                    attributes: [
                        "name",
                        "doseByKg",
                        "administrationRoute",
                        "administredAt",
                        "frequency",
                        "isAdministred"]},
                {model: PatientsDailyChart,
                    attributes: [
                         "avaliationTime",
                        "symptoms",
                        "alimentation",
                        "feedingProbe",
                        "temperature",
                       "glicose",
                        "bpm",
                        "fr",
                        "normalUrine",
                        "isBetter",
                        "generalStatus",
                        "notes",
                        "vetNotes"]}], 
        });

        if (!treatment) {
            return res.status(404).json({ error: 'Treatment not found.' });
        }

        res.status(200).json(treatment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readTreatmentByPetName = async (req, res) => {
    const { petName } = req.params;

    try {
        const treatments = await Treatment.findAll({
            include: [
                {model: Patient,
                    required: true,
                    attributes: ["admission"],
                    include:{
                        model: Pet,
                            attributes: ["name"],
                            required: true,
                            where: { name: petName }
                    }
                },
            ],include: [
                {model: Medication, 
                    attributes: [
                        "name",
                        "doseByKg",
                        "administrationRoute",
                        "administredAt",
                        "frequency",
                        "isAdministred"]},
                {model: PatientsDailyChart,
                    attributes: [
                         "avaliationTime",
                        "symptoms",
                        "alimentation",
                        "feedingProbe",
                        "temperature",
                       "glicose",
                        "bpm",
                        "fr",
                        "normalUrine",
                        "isBetter",
                        "generalStatus",
                        "notes",
                        "vetNotes"]}]
        });
        if (treatments.length === 0) {
            return res.status(404).json({ error: 'No treatments found for this pet.' });
        }
        res.status(200).json(treatments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readTreatmentByTutorName = async (req, res) => {
    const { tutorName } = req.params;

    try {
        const treatments = await Treatment.findAll({
            include: [{
                model: Patient,
                required: true,
                attributes: ["petId"],
                include:[
                    {
                        model:Pet,
                        required: true,
                        attributes: ["tutorId"],
                        include:[
                            {
                                model:Role,
                                required: true,
                                attributes: ["personRegisterId"],
                                include:[
                                    {
                                        model:PersonRegister,
                                        required: true,
                                        where: { name: tutorName },
                                        attributes: [
                                            "name",
                                            "cpf"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {model: Medication, 
                attributes: [
                    "name",
                    "doseByKg",
                    "administrationRoute",
                    "administredAt",
                    "frequency",
                    "isAdministred"]},
            {model: PatientsDailyChart,
                attributes: [
                     "avaliationTime",
                    "symptoms",
                    "alimentation",
                    "feedingProbe",
                    "temperature",
                   "glicose",
                    "bpm",
                    "fr",
                    "normalUrine",
                    "isBetter",
                    "generalStatus",
                    "notes",
                    "vetNotes"]}
                
            ]
        });
        if (treatments.length === 0) {
            return res.status(404).json({ error: 'No treatments found for this tutor.' });
        }
        res.status(200).json(treatments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readAllTreatments = async (req, res) => {
    try {
        const treatments = await Treatment.findAll({
            include: [ {model: Patient,
                        required: true,
                        attributes: ["admission"],
                        include:{
                            model: Pet,
                            attributes: ["name"],
                }
            }],
        });
        res.status(200).json(treatments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    readTreatmentById,
    readTreatmentByPetName,
    readTreatmentByTutorName,
    readAllTreatments,
};