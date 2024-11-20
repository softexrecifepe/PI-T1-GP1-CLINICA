const {  PatientDailyChart } = require("../../models/PatientDailyChart")
require("../../models/associations")

async function deleteDailyChart(req, res){
    try{
        const patientDailyChart = await PatientDailyChart.findOne({ where: {id: req.body.id} });
        if(patientDailyChart) {
            await patientDailyChart.destroy();
            res.status(204).json()
        } else {
            res.status(404).json({error: "Registro nâo encontrado"});
        }
    } catch(err){
        res.status(500).json({error: `Não foi possivel deletar o pet ${err}`});
    }
}

module.exports = { 
    deleteDailyChart
}