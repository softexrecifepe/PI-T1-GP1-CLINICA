const {Contact} = require("../../models/contact.js");
require("../../models/associations.js");

async function createContact(req, res) {
    try {
        const { personregisterId, phonenumber, email } = req.body;
        const newContact = await Contact.create({ personregisterId, phonenumber, email });
        res.status(201).json(newContact);
    } catch (err) {
        res.status(500).json({ Error: "Error creating contact", details: err.message });
    };
};

module.exports = {
    createContact
}