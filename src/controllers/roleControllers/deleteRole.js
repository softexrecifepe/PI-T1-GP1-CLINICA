const {Role} = require("../../models/role.js");
require("../../models/associations.js");

async function deleteRoleById(req, res) {
    try {
        const { id } = req.params;
        const deletedRole = await Role.destroy({ where: { id } });
        if (deletedRole) {
            res.status(200).json({ message: "Role deleted successfully"});
        } else {
            res.status(404).json({ Error: "Role not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting role", details: err.message });
    };
};

module.exports = {
    deleteRoleById
}