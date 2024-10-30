const { createContact } = require("./createContact");
const { readAllContacts, readContactById, readContactByEmail, readContactByPhoneNumber } = require("./getContact");
const { updateContact } = require("./updateContact");
const { deleteContact } = require("./updateContact");

module.exports = {
    createContact,
    readAllContacts,
    readContactById,
    readContactByEmail,
    readContactByPhoneNumber,
    updateContact,
    deleteContact
}