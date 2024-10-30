const {Contact} = require("../../models/contact.js");
require("../../models/associations.js");

async function readAllContacts(req, res) {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving contacts", details: err.message });
    };
};

async function readContactById(req, res) {
    try {
        const { id } = req.params;
        const contact = await Contact.findByPk(id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({ Error: "Contact not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving contact", details: err.message });
    };
};

async function readContactByPhoneNumber(req, res) {
    try {
        const { phoneNumber } = req.params;
        const contacts = await Contact.findAll({ where: { phoneNumber } });
        if (contacts.length > 0) {
            res.status(200).json(contacts);
        } else {
            res.status(404).json({ Error: "No contacts found with this phone number" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving contacts by phone number", details: err.message });
    };
};

async function readContactByEmail(req, res) {
    try {
        const { email } = req.params;
        const contacts = await Contact.findAll({ where: { email } });
        if (contacts.length > 0) {
            res.status(200).json(contacts);
        } else {
            res.status(404).json({ Error: "No contacts found with this email" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving contacts by email", details: err.message });
    };
};

module.exports = {
    readAllContacts,
    readContactById,
    readContactByEmail,
    readContactByPhoneNumber
}