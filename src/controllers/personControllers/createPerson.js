const { PersonRegister } = require("../../models/personRegister.js");
const { Role } = require("../../models/role.js");
const { Address } = require("../../models/address.js");
const { Contact } = require("../../models/contact.js");
const utils = require("../../../utils/utils.js");
require("../../models/associations.js");

async function createPerson(req, res) {
    try {
        const { name, cpf, address, contact, role } = req.body;
        if (!utils.validateCPF(req.body.cpf)) {
            return res.status(400).send("CPF inválido");
        }
        if (contact && !utils.validateEmail(contact.email)) {
            return res.status(400).send("Email inválido");
        }
        const newPerson = await PersonRegister.create({ name, cpf });
        if (address) {
            await Address.create({
                ...address,
                personRegisterId: newPerson.id,  // Atribui a chave estrangeira
            });
        }
        if (contact) {
            await Contact.create({
                ...contact,
                personRegisterId: newPerson.id,  // Atribui a chave estrangeira
            });
        }
        if (role) {
            await Role.create({
                ...role,
                personRegisterId: newPerson.id,  // Atribui a chave estrangeira
            });
        }
        res.status(201).json({ message: "New person created successfully", newPerson });

    } catch (err) {
        res.status(500).json({ Error: "Error creating person", details: err.message });
    }
};

module.exports = {
    createPerson
};