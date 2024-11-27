const {Contact} = require("../../models/contact.js");
require("../../models/associations.js");

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

        res.status(200).json({
            message: "Contact updated sucessfully",
            contact
        });
    } catch (err) {
        res.status(500).json({ Error: "Error updating contact", details: err.message });
    };
};

module.exports = {
    updateContactById
}