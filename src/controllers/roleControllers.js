import Role from "../models/role.js";
import "../models/associations.js";

async function readAllRoles(req, res) {
    try {
        const roles = await Role.findAll();
        res.status(200).json(roles);
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving roles", details: err.message });
    }
}

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
    }
}

async function readRoleByRoleType(req, res) {
    try {
        const { roleType } = req.params;
        const roles = await Role.findAll({
            where: { roleType }
        });
        if (roles.length > 0) {
            res.status(200).json(roles);
        } else {
            res.status(404).json({ Error: "No roles found with this type" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving roles by type", details: err.message });
    }
}

async function createRole(req, res) {
    try {
        const { personRegisterid, roleType, crmv } = req.body;
        const newRole = await Role.create({
            personRegisterid,
            roleType,
            crmv
        });
        res.status(201).json(newRole);
    } catch (err) {
        res.status(500).json({ Error: "Error creating role", details: err.message });
    }
}

async function deleteRoleById(req, res) {
    try {
        const { id } = req.params;
        const deletedRole = await Role.destroy({ where: { id } });
        if (deletedRole) {
            res.status(204).send();
        } else {
            res.status(404).json({ Error: "Role not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting role", details: err.message });
    }
}

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
    }
}

export {
    readAllRoles,
    readRoleById,
    readRoleByRoleType,
    createRole,
    deleteRoleById,
    updateRoleById,
};