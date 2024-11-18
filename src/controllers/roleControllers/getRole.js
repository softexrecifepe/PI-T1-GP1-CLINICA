const {Role} = require("../../models/role.js");
require("../../models/associations.js");

async function readAllRoles(req, res) {
    try {
        const roles = await Role.findAll();
        res.status(200).json(roles);
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving roles", details: err.message });
    };
};

async function readRoleById(req, res) {
    try {
        const { id } = req.params;
        const role = await Role.findByPk(id);
        if (role) {
            res.status(200).json(role);
        } else {
            res.status(404).json({ Error: "Role not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving role", details: err.message });
    };
};

async function readRoleByRoleType(req, res) {
    try {
        const { roletype } = req.params;
        const roles = await Role.findAll({
            where: { roletype }
        });
        if (roles.length > 0) {
            res.status(200).json(roles);
        } else {
            res.status(404).json({ Error: "No roles found with this type" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving roles by type", details: err.message });
    };
};

module.exports = {
    readAllRoles,
    readRoleById,
    readRoleByRoleType
}