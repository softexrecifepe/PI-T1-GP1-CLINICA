const express = require("express");
const router = express.Router();
const controllers = require("../controllers/cageControllers/cageExports");

router.get("/all-cages", controllers.getAllCages); 
router.get("/id/:id", controllers.getCageById); 
router.post("/", controllers.createCage); 
router.put("/:id", controllers.updateCage); 
router.delete("/:id", controllers.deleteCageById);

module.exports = router;