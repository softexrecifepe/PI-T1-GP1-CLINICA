const {Cage} = require("../../models/cage.js");
require("../../models/associations.js");

async function createCage(req, res) {
    try {
        const { cageNumber } = req.body;
        const newCage = await Cage.create({ cageNumber });
    
        res.status(201).json({
          message: "Cage created sucessfully",
          cage: newCage});
      } catch (error) {
        res.status(500).json({ error: "Error to create cage" });
      }
};

module.exports = {
    createCage
}