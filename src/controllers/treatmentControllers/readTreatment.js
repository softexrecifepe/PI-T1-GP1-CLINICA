const { Treatment } = require("../../models/treatment.js")
const { Medication } = require("../../models/medication.js");
const { PatientsDailyChart } = require("../../models/patientsDailyChart.js");
const { Pet } = require("../../models/pet");
const { PersonRegister } = require("../../models/personRegister.js");
const { Patient } = require("../../models/patient.js");
const { Role } = require("../../models/role.js");
require("../../models/associations.js");

// Function to read a treatment by ID
const readTreatmentById = async (req, res) => {
    const { treatmentId } = req.params;

    try {
        // Fetching the treatment from the database
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
                        "vetNotes"]}], // Including related data
        });

        // Checking if the treatment was found
        if (!treatment) {
            return res.status(404).json({ error: 'Treatment not found.' });
        }

        // Responding with the treatment data
        res.status(200).json(treatment);
    } catch (error) {
        // Error handling when fetching the treatment
        res.status(400).json({ error: error.message });
    }
};

// Function to read treatments by pet's name
const readTreatmentByPetName = async (req, res) => {
    const { petName } = req.params;

    try {
        // Fetching treatments associated with the pet's name
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
                        "vetNotes"]}] // Including related data
        });

        // Checking if treatments were found
        if (treatments.length === 0) {
            return res.status(404).json({ error: 'No treatments found for this pet.' });
        }

        // Responding with the found treatments
        res.status(200).json(treatments);
    } catch (error) {
        // Error handling when fetching the treatments
        res.status(400).json({ error: error.message });
    }
};

// Function to read treatments by guardian's name
const readTreatmentByTutorName = async (req, res) => {
    const { tutorName } = req.params;

    try {
        // Fetching treatments associated with the tutor's name
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

        // Checking if treatments were found
        if (treatments.length === 0) {
            return res.status(404).json({ error: 'No treatments found for this tutor.' });
        }

        // Responding with the found treatments
        res.status(200).json(treatments);
    } catch (error) {
        // Error handling when fetching the treatments
        res.status(400).json({ error: error.message });
    }
};

// Function to read all treatments with pagination
const readAllTreatments = async (req, res) => {
    try {
        // Fetching all treatments with limit and offset for pagination
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

        // Responding with the list of treatments and pagination information
        res.status(200).json(treatments);
    } catch (error) {
        // Error handling when fetching the treatments
        res.status(400).json({ error: error.message });
    }
};

// Exporting the functions for use in other parts of the application
module.exports = {
    readTreatmentById,
    readTreatmentByPetName,
    readTreatmentByTutorName,
    readAllTreatments,
};