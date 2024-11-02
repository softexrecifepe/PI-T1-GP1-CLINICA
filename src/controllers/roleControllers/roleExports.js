const { createRole } = require("./createRole");
const { readAllRoles, readRoleById, readRoleByRoleType } = require("./getRole");
const { updateRoleById } = require("./updateRole");
const { deleteRoleById } = require("./deleteRole");

module.exports = {
    createRole,
    readAllRoles,
    readRoleById,
    readRoleByRoleType,
    updateRoleById,
    deleteRoleById
}