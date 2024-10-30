import express from 'express';
import {
    readAllContacts,
    readContactById,
    readContactByPhoneNumber,
    readContactByEmail,
    createContact,
    deleteContactById,
    updateContactById,
} from '../controllers/contactControllers.js';

const router = express.Router();

router.get('/', readAllContacts);
router.get('/id/:id', readContactById);
router.get('/phone/:phoneNumber', readContactByPhoneNumber);
router.get('/email/:email', readContactByEmail);
router.post('/', createContact);
router.delete('/id/:id', deleteContactById);
router.put('/id/:id', updateContactById);

export default router;
