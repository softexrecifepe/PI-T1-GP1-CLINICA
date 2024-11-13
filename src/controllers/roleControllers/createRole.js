const {Role} = require("../../models/role.js");
require("../../models/associations.js");

async function createRole(req, res) {
    try {
        const { personregisterid, roleType, crmv } = req.body;
        const newRole = await Role.create({
            personregisterid,
            roleType,
            crmv
        });
        res.status(201).json(newRole);
    } catch (err) {
        res.status(500).json({ Error: "Error creating role", details: err.message });
    };
};

module.exports = {
    createRole
}