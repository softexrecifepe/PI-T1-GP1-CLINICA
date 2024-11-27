const {Contact} = require("../../models/contact.js");
require("../../models/associations.js");

async function createContact(req, res) {
    try {
        const { personRegisterId, phoneNumber, email } = req.body;
        const newContact = await Contact.create({ 
            personRegisterId, 
            phoneNumber, 
            email 
        });
        res.status(201).json({
            message: "Contact created Successfully",
            contact: newContact
        });
    } catch (err) {
        res.status(500).json({ Error: "Error creating contact", details: err.message });
    };
};

module.exports = {
    createContact
}