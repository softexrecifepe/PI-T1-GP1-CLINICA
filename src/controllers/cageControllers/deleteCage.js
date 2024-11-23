const { Cage } = require("../../models/cage.js");
require("../../models/associations.js");

async function deleteCageById(req, res) {
    try {
        const { id } = req.params;

        const cage = await Cage.findByPk(id);

        if (!cage) {
            return res.status(404).json({ error: "Gaiola não encontrada" });
        }

        await cage.destroy();

        res.status(200).json({ message: "Gaiola deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Falha ao deletar a gaiola" });
    }

};

module.exports = {
    deleteCageById
}