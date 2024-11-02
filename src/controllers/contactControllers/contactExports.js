const { createContact } = require("./createContact");
const { readAllContacts, readContactById, readContactByEmail, readContactByPhoneNumber } = require("./getContact");
const { updateContactById } = require("./updateContact");
const { deleteContactById } = require("./deleteContact");

module.exports = {
    createContact,
    readAllContacts,
    readContactById,
    readContactByEmail,
    readContactByPhoneNumber,
    updateContactById,
    deleteContactById
}