const { Pet } = require("../../models/pet");
const { Role } = require("../../models/role.js");
const { PersonRegister } = require("../../models/personRegister.js");
require("../../models/associations.js");

async function getAllPets(req, res){
    try {
      const pets = await Pet.findAll(); // Busca todos os pets
      res.json(pets);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar os pets.' + error });
    }
  };

  async function getPetById(req, res){
    try {
      const pet = await Pet.findOne({ where: {id: req.params.id} });
      if (pet) {
        res.json(pet);
      } else {
        res.status(404).json({ error: 'Pet não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o pet.'  + error});
    }
  };

  async function getPetByName(req, res){
    try {
      const pets = await Pet.findAll({ where: {name: req.params.name} });
      if (pets.length > 0) {
        res.json(pets);
      } else {
        res.status(404).json({ error: 'Nenhum pet com esse nome foi encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pets pelo nome.' + error});
    }
  };

  async function getMostRecentPet(req, res){
    try {
      const recentPet = await Pet.findOne({
        order: [['createdAt', 'DESC']], // Ordena pela data de criação (mais recente primeiro)
      });
      if (recentPet) {
        res.json(recentPet);
      } else {
        res.status(404).json({ error: 'Nenhum pet encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o pet mais recente.'  + error});
    }
  };
  
  async function getPetByTutorName(req, res) {
    const { tutorName } = req.params;
  
    try {
      const pets = await Pet.findAll({
        include: [
          {
            model: Role,
            include: [
              {
                model: PersonRegister,
                where: { name: tutorName },  
                attributes: ['name'], 
              },
            ],
            required: true,
            attributes: ['roleType'],
          },
        ],
      });
      if (pets.length > 0) {
        res.json(pets);
      } else {
        res.status(404).json({ error: 'Nenhum pet encontrado para esse tutor.' });
      }
    } catch (error) {
      console.error('Erro ao buscar pets pelo nome do tutor:', error);
      res.status(500).json({ error: 'Erro ao buscar pets pelo nome do tutor.' + error });
    }
  };


  module.exports = {
    getAllPets,
    getPetById,
    getPetByName,
    getMostRecentPet,
    getPetByTutorName
  }