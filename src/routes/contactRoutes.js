const express = require('express');
const contactControllers = require("../controllers/contactControllers/contactExports");

const router = express.Router();

router.get('/', contactControllers.readAllContacts);
router.get('/id/:id', contactControllers.readContactById);
router.get('/phone/:phoneNumber', contactControllers.readContactByPhoneNumber);
router.get('/email/:email', contactControllers.readContactByEmail);
router.post('/', contactControllers.createContact);
router.delete('/id/:id', contactControllers.deleteContact);
router.put('/id/:id', contactControllers.updateContact);

module.exports = router;