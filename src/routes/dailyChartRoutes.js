const express = require("express");
const router = express.Router();
const controllers = require("../controllers/patientDailyChartControllers/patientDailyChartControllersExports")

router.get("/id/:id", controllers.getDailyChartById);
router.get("/date/:date", controllers.getDailyChartByDate);
router.get("/cpf/:cpf", controllers.getDailyChartByCPF);
router.get("/petName/:petName", controllers.getDailyChartByPetName);
router.get("/all", controllers.getAllDailyCharts)
router.post("/", controllers.createPatientsDailyChart);
router.put("/:id", controllers.updateDailyChart);
router.delete("/:id", controllers.deleteDailyChart);

module.exports = router