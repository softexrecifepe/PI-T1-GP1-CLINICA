const { PatientsDailyChart } = require("../../models/patientsDailyChart")
require("../../models/associations")

async function createPatientsDailyChart(req, res){
    const {avaliationTime, symptoms, alimentation, feedingProbe, temperature, glicose, bpm, fr, normalUrine, isBetter, generalStatus, notes, vetNotes, treatmentId, roleId} = req.body;
    if(!req.body.roleId){
        return res.status(500).json({message: "insira um identificador valido"})
    }
    try{ 
        const newDailyChart = await PatientsDailyChart.create( {avaliationTime, symptoms, alimentation, feedingProbe, temperature, glicose, bpm, fr, normalUrine, isBetter, generalStatus, notes, vetNotes, treatmentId, roleId} );
        res.status(201).json(newDailyChart);
    } catch(error){
        res.status(500).json({
            error: "Erro ao criar um novo registro",
            details: error.errors ? error.errors.map(err => err.message) : error.message,
          });
          
    }
}

module.exports = {
    createPatientsDailyChart
}