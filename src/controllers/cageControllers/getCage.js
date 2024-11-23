const { Cage } = require("../../models/cage");
require("../../models/associations");

async function getAllCages (req, res) {
    try {
        const cages = await Cage.findAll();
        res.status(200).json(cages);
      } catch (error) {
        res.status(500).json({ error: "Erro ao localizar as gaiolas" });
      }   
};

async function getCageById(req, res) {
    try {
        const { id } = req.params;
        const cage = await Cage.findByPk(id);
    
        if (!cage) {
          return res.status(404).json({ error: "Gaiola não encontrada" });
        }
    
        res.status(200).json(cage);
      } catch (error) {
        res.status(500).json({ error: "Erro ao localizar a gaiola" });
      }
};

module.exports = {
    getAllCages,
    getCageById
}