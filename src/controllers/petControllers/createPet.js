const { Pet } = require("../../models/pet");

async function createPet (req, res){
    const { name, species, breed, color, weight, sex, age, photo, behavior, neurologicalDisorders, notes } = req.body;
    try {
      const newPet = await Pet.create({
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
        notes
      });
      res.status(201).json(newPet);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar um novo pet.' + error });
    }
  };

  module.exports = {
    createPet
  }