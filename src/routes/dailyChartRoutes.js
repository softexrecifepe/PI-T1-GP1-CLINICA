const express = require("express");
const router = express.Router();
const controllers = require("../controllers/patientDailyChartControllers/patientDailyChartControllersExports");

// Rotas get
router.get("/id/:id", controllers.getDailyChartById);
router.get("/date/:date", controllers.getDailyChartByDate);
router.get("/cpf/:cpf", controllers.getDailyChartByCPF);
router.get("pet/:petName", controllers.getDailyChartByPetName);

// Rotas post
router.post("/", controllers.createPatientsDailyChart);

// Rota update
router.put("/", controllers.updateDailyChart);

// Rota delete
router.delete("/", controllers.deleteDailyChart);

module.exports = router