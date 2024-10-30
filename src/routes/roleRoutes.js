import express from 'express';
import {
    readAllRoles,
    readRoleById,
    readRoleByRoleType,
    createRole,
    deleteRoleById,
    updateRoleById,
} from '../controllers/roleControllers.js';

const router = express.Router();

router.get('/', readAllRoles);
router.get('/id/:id', readRoleById);
router.get('/type/:roleType', readRoleByRoleType);
router.post('/', createRole);
router.delete('/id/:id', deleteRoleById);
router.put('/id/:id', updateRoleById);

export default router;