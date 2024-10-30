const { PersonRegister } = require("../../models/personRegister.js");
const { Role } = require("../../models/role.js");
const { Address } = require("../../models/address.js");
const { Contact } = require("../../models/contact.js");
require("../../models/associations.js");

async function createPerson(req, res) {
    try {
        const { name, cpf, address, contact, role } = req.body;
        const newPerson = await PersonRegister.create({name, cpf});
        if (address) {
            await Address.create({
                ...address,
                personRegisterid: newPerson.id,
            });
        }
        if (contact) {
            await Contact.create({
                ...contact,
                personRegisterid: newPerson.id,
            });
        }
        if (role) {
            await Role.create({
                ...role,
                personRegisterid: newPerson.id,
            });
        }
        res.status(201).json({ message: "New person created successfully", newPerson});
    } catch (err) {
        res.status(500).json({ Error: "Error creating person", details: err.message});
    };
};

module.exports = {
    createPerson
}