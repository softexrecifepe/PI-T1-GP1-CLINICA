const express = require("express");
const router = express.Router();
const controllers = require("../controllers/patientControllers/patientExports");

router.get("/all-patients", controllers.getAllPatients);
router.get("/id/:id", controllers.getPatientById);
router.get("/recent", controllers.getMostRecentPatient); 
router.post("/", controllers.createPatient);
router.put("/:id", controllers.updatePatient);
router.delete("/:id", controllers.deletePatient);

module.exports = router;