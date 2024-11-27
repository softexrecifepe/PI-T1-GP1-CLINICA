const { Patient } = require("../../models/patient");
const { Treatment } = require("../../models/treatment.js");
require("../../models/associations.js");

async function deletePatient (req, res) {
  try {
    const { id } = req.params;
    const deleted = await Patient.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ error: 'Paciente não encontrado.' });
    }

    res.status(200).json({message: "Patient deleted sucessfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar paciente.' });
  }
};


module.exports = { deletePatient };