const { Patient } = require("../../models/patient");
require("../../models/associations");

async function getAllPatients (req, res) {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar pacientes.' });
  }
};

async function getPatientById (req, res) {
    try {
        const patient = await Patient.findOne({ where: {id: req.params.id}
        });
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).json({error: 'Paciente não encontrado.'});
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar o paciente.' + error});
    }
};

async function getMostRecentPatient(req, res){
    try {
      const recentPatient = await Patient.findOne({
        order: [['createdAt', 'DESC']],
      });
      if (recentPatient) {
        res.json(recentPatient);
      } else {
        res.status(404).json({ error: 'Nenhum paciente encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o paciente mais recente.' + error});
    }
  };

module.exports = {
    getAllPatients,
    getPatientById,
    getMostRecentPatient
}