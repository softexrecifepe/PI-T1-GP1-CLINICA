const express = require('express');
const roleControllers = require("../controllers/roleControllers/roleExports");

const router = express.Router();

router.get('/', roleControllers.readAllRoles);
router.get('/id/:id', roleControllers.readRoleById);
router.get('/type/:roletype', roleControllers.readRoleByRoleType);
router.post('/', roleControllers.createRole);
router.delete('/id/:id', roleControllers.deleteRoleById);
router.put('/id/:id', roleControllers.updateRoleById);

module.exports = router;