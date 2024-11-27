const { Cage } = require("../../models/cage.js");
require("../../models/associations.js");

async function deleteCageById(req, res) {
    try {
        const { id } = req.params;

        const cage = await Cage.findByPk(id);

        if (!cage) {
            return res.status(404).json({ error: "Cage not found" });
        }

        await cage.destroy();

        res.status(200).json({ message: "Cage deleted sucessfully" });
    } catch (error) {
        res.status(500).json({ error: "Fail to delete cage" });
    }

};

module.exports = {
    deleteCageById
}