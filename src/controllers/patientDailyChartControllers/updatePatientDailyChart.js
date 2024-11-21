const { PatientsDailyChart } = require("../../models/patientsDailyChart")
require("../../models/associations");

async function updateDailyChart(req, res){
    
    try{
        const patientDailyChart = await PatientsDailyChart.findOne({where: {id: req.params.id}});
        if(patientDailyChart){
            await patientDailyChart.update(req.body);
            res.json(patientDailyChart);
        } else {
            res.status(404).json({ error: "Registro não encontrado."})
        }
    }catch(err){
        res.status(500).json({error: "Erro ao atualizar registro." + err});
    }
}

module.exports = {
    updateDailyChart
};