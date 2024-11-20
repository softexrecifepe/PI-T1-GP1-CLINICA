const { PatientsDailyChart } = require("../../models/patientsDailyChart")
require("../../models/associations")

async function createPatientsDailyChart(req, res){
    const {avaliationTime, symptoms, alimentation, feedingProbe, temperature, glicose, bpm, fr, normalUrine, isBetter, generalStatus, notes, vetNotes} = req.body;
    try{ 
        const newDailyChart = await PatientsDailyChart.create( req.body );
        res.status(201).json(newDailyChart);
    } catch(error){
        res.status(500).json({error: `erro ao criar um novo registro ${error}`});
    }
}

module.exports = {
    createPatientsDailyChart
}