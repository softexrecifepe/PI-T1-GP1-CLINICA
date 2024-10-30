const { createRole } = require("./createRole");
const { readAllRoles, readRoleById, readRoleByRoleType } = require("./getRole");
const { updateRole } = require("./updateRole");
const { deleteRole } = require("./updateRole");

module.exports = {
    createRole,
    readAllRoles,
    readRoleById,
    readRoleByRoleType,
    updateRole,
    deleteRole
}