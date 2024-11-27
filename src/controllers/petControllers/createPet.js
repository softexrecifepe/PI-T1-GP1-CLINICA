const { Pet } = require("../../models/pet");
require("../../models/associations.js");

async function createPet (req, res){
    const { name, species, breed, color, weight, sex, age, photo, behavior, neurologicalDisorders, notes, tutorId } = req.body;
    try {
      const newPet = await Pet.create( req.body );
      res.status(201).json({
        message: "Pet created successfully",
        pet: newPet
      });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar um novo pet.' + error });
    }
  };

  module.exports = {
    createPet
  }