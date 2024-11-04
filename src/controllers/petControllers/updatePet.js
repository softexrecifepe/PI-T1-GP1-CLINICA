const { Pet } = require("../../models/pet");
require("../../models/associations.js");

async function updatePet (req, res){
    const { name, species, breed, color, weight, sex, age, photo, behavior, neurologicalDisorders, notes } = req.body;
  
    try {
      const pet = await Pet.findOne({ where: { id: req.params.id } });
  
      if (pet) {
        await pet.update({
          name,
          species,
          breed,
          color,
          weight,
          sex,
          age,
          photo,
          behavior,
          neurologicalDisorders,
          notes,
        });
        res.json(pet);
      } else {
        res.status(404).json({ error: 'Pet não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o pet.' + error });
    }
  };

  module.exports = {
    updatePet
  }