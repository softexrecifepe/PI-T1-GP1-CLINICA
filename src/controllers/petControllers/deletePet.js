const { Pet } = require("../../models/pet");

  async function deletePet (req, res){
    try {
      const pet = await Pet.findOne({ where: {id: req.params.id} });
  
      if (pet) {
        await pet.destroy();
        res.status(204).json(); // Retorna status 204 (sem conteúdo)
      } else {
        res.status(404).json({ error: 'Pet não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o pet.' + error});
    }
  }

  module.exports = { 
    deletePet  
  }