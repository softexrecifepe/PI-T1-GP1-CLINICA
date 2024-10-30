import Contact from "../models/contact.js";
import "../models/associations.js";

async function readAllContacts(req, res) {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving contacts", details: err.message });
    }
}

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
    }
}

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
    }
}

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
    }
}

async function createContact(req, res) {
    try {
        const { personregisterId, phonenumber, email } = req.body;
        const newContact = await Contact.create({ personregisterId, phonenumber, email });
        res.status(201).json(newContact);
    } catch (err) {
        res.status(500).json({ Error: "Error creating contact", details: err.message });
    }
}

async function deleteContactById(req, res) {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.destroy({ where: { id } });
        if (deletedContact) {
            res.status(204).send();
        } else {
            res.status(404).json({ Error: "Contact not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting contact", details: err.message });
    }
}

async function updateContactById(req, res) {
    try {
        const { id } = req.params;
        const { phoneNumber, email } = req.body;
        const contact = await Contact.findByPk(id);

        if (!contact) {
            return res.status(404).json({ Error: "Contact not found" });
        }

        await contact.update({
            phoneNumber: phoneNumber || contact.phonenumber,
            email: email || contact.email,
        });

        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ Error: "Error updating contact", details: err.message });
    }
}

export {
    readAllContacts,
    readContactById,
    readContactByPhoneNumber,
    readContactByEmail,
    createContact,
    deleteContactById,
    updateContactById,
};