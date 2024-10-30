const {Contact} = require("../../models/contact.js");
require("../../models/associations.js");

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
    };
};

module.exports = {
    deleteContactById
}