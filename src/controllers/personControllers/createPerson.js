const { PersonRegister } = require("../../models/personRegister.js");
const { Role } = require("../../models/role.js");
const { Address } = require("../../models/address.js");
const { Contact } = require("../../models/contact.js");
const utils = require("../../../utils/utils.js");
require("../../models/associations.js");

async function createPerson(req, res) {
    try {
        const { name, cpf, address, contact, role } = req.body;

        // Validação do CPF
        if (!utils.validateCPF(req.body.cpf)) {
            return res.status(400).send("CPF inválido");
        }

        // Validação do Email
        if (contact && !utils.validateEmail(contact.email)) {
            return res.status(400).send("Email inválido");
        }

        // Criação da nova pessoa
        const newPerson = await PersonRegister.create({ name, cpf });

        // Criar o endereço, se houver
        if (address) {
            await Address.create({
                ...address,
                personregisterid: newPerson.id,  // Atribui a chave estrangeira
            });
        }

        // Criar o contato, se houver
        if (contact) {
            await Contact.create({
                ...contact,
                personregisterid: newPerson.id,  // Atribui a chave estrangeira
            });
        }

        // Criar o papel, se houver
        if (role) {
            await Role.create({
                ...role,
                personregisterid: newPerson.id,  // Atribui a chave estrangeira
            });
        }

        // Retorna a resposta de sucesso
        res.status(201).json({ message: "New person created successfully", newPerson });

    } catch (err) {
        res.status(500).json({ Error: "Error creating person", details: err.message });
    }
};

module.exports = {
    createPerson
};