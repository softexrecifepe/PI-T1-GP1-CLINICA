const { PatientsDailyChart } = require("../../models/patientsDailyChart")
require("../../models/associations")

async function deleteDailyChart(req, res){
    try{
        const patientDailyChart = await PatientsDailyChart.findOne({ where: {id: req.params.id} });
        if(patientDailyChart) {
            await patientDailyChart.destroy()   ;
            res.status(200).json({message: "Daily-chart deleted successfully"})
        } else {
            res.status(404).json({error: "Register not found"});
        }
    } catch(err){
        res.status(500).json({error: `Register not found ${err}`});
    }
}

module.exports = { 
    deleteDailyChart
}