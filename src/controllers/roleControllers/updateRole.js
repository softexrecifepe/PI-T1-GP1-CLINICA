const Role = require("../../models/role.js");
require("../../models/associations.js");

async function updateRoleById(req, res) {
    try {
        const { id } = req.params; 
        const { personRegisterid, roleType, crmv } = req.body;
        const role = await Role.findByPk(id);
        
        if (!role) {
            return res.status(404).json({ Error: "Role not found" });
        }

        await role.update({ 
            personRegisterid: personRegisterid || role.personregisterid, 
            roleType: roleType || role.roletype,
            crmv: crmv || role.crmv
        });

        res.status(200).json(role);
    } catch (err) {
        res.status(500).json({ Error: "Error updating role", details: err.message });
    };
};

module.exports = {
    updateRoleById
}