const { PatientsDailyChart } = require("../../models/patientsDailyChart")
require("../../models/associations")

async function deleteDailyChart(req, res){
    try{
        const patientDailyChart = await PatientsDailyChart.findOne({ where: {id: req.params.id} });
        if(patientDailyChart) {
            await patientDailyChart.destroy()   ;
            res.status(204).send("registro excluido com sucesso")
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