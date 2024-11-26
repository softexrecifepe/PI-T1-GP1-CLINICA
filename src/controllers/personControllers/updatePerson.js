const {PersonRegister} = require("../../models/personRegister.js");
require("../../models/associations.js");

async function updatePersonById(req, res) {
    try {
        const { id } = req.params; 
        const { name, cpf, address, contact, role } = req.body;
        const person = await PersonRegister.findByPk(id);
        
        if (!person) {
            return res.status(404).json({ Error: "Person not found" });
        }

        await person.update({ name, cpf });

        if (address) {
            await person.createAddress(address);
        }

        if (contact) {
            await person.createContact(contact);
        }

        if (role) {
            await person.createRole(role);
        };

        res.status(200).json({ 
            message: "Person successfully updated", 
            updatedPerson: person 
        });
    } catch (err) {
        res.status(500).json({ Error: "Error updating person", details: err.message });
    };
};

module.exports = {
    updatePersonById
}