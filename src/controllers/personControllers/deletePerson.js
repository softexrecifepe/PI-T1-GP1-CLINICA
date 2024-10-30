const PersonRegister = require("../../models/personRegister.js");
import "../../models/associations.js";

async function deletePersonById(req, res) {
    try {
        const { id } = req.params;
        const person = await PersonRegister.findByPk(id);
        if (person) {
            await PersonRegister.destroy({
                where: { id }
            });
            res.status(204).json({ message: "Person deleted successfully"});
        } else {
            res.status(404).json({ Error: "Person not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting person", details: err.message });
    };
};

module.exports = {
    deletePersonById
}