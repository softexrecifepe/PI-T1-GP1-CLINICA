const express = require("express");
const router = express.Router();
const controllers = require("../controllers/patientDailyChartControllers/patientDailyChartControllersExports");

// Rotas get
router.get("/id/:id", controllers.getDailyChartById);
router.get("/date/:date", controllers.getDailyChartByDate);
//   "message": "Erro ao buscar registros. ReferenceError: sequelize is not defined"
router.get("/cpf/:cpf", controllers.getDailyChartByCPF);
// "message": "Erro ao buscar registros. SequelizeEagerLoadingError: Pet is not associated to PatientsDailyChart!"
router.get("pet/:petName", controllers.getDailyChartByPetName);
// "message": "Erro ao buscar registros. SequelizeEagerLoadingError: Pet is not associated to PatientsDailyChart!"

// Rotas post
router.post("/", controllers.createPatientsDailyChart);

// Rota update
router.put("/:id", controllers.updateDailyChart);

// Rota delete
router.delete("/", controllers.deleteDailyChart);

module.exports = router