const {createPatientsDailyChart} = require("./createPatientDailyChart");
const {updateDailyChart} = require("./updatePatientDailyChart");
const {deleteDailyChart} = require("./deletePatientDailyChart");
const {getDailyChartById, getDailyChartByPetName, getDailyChartByDate, getDailyChartByCPF} = require("./getPatientDailyChart");

module.exports = {
    createPatientsDailyChart,
    updateDailyChart,
    deleteDailyChart,
    getDailyChartByCPF,
    getDailyChartByDate,
    getDailyChartById,
    getDailyChartByPetName
};