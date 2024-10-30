import PersonRegister from "../models/personRegister.js"
import Role from "../models/role.js"
import Address from "../models/adress.js"
import "../models/associations.js";

async function readAllPersons(req, res) {
    try {
        const person = await PersonRegister.findAll();
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    };
};

async function readPersonById(req, res) {
    try {
        const { id } = req.params
        const person = await PersonRegister.findByPk(id);
        if (person) {
            res.status(200).json(person)
        } else {
            res.status(404).json({Error: "Person not found"});
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    }
};

async function readPersonByName(req, res) {
    try {
        const { name } = req.params;
        const person = await PersonRegister.findOne({ where: { name } });
        if (person) {
            res.status(200).json(person);
        } else {
            res.status(404).json({Error: "Person not found"});
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    }
};

async function readPersonsByRole(req, res) {
    try {
        const { role } = req.params;
        const person = await PersonRegister.findAll({
            include: {
                model: Role,
                where: { roletype: role },
                attributes: []
            }
        });
        if (person.length > 0) {
            res.status(200).json(person);
        } else {
            res.status(404).json({ Error: "No persons found with this role"})
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    };
};

async function readPersonByPostalCode(req, res) {
    try {
        const { searchedPostalCode } = req.params;
        const person = await PersonRegister.findAll({
            include: {
                model: Address,
                where: { postalcode: searchedPostalCode },
                attributes: []
            }
        });
        if (person.length > 0) {
            res.status(200).json(person);
        } else {
            res.status(404).json({ Error: "No persons found with this address."})
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    };
};

async function readPersonByPhoneNumber(req, res) {
    try {
        const { cellPhone } = req.params;
        const person = await PersonRegister.findAll({
            include: {
                model: Contact,
                where: { phonenumber: cellPhone},
                attributes: []
            }
        });
        if (person.length > 0) {
            res.status(200).json(person);
        } else {
            res.status(404).json({ Error: "No persons found with this number."})
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    };
};

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

async function deletePersonById(req, res) {
    try {
        const { id } = req.params;
        const person = await PersonRegister.findByPk(id);
        if (person) {
            await PersonRegister.destroy({
                where: { id }
            });
            res.status(204).json({ message: "Person deleted successfully"});
        } else {
            res.status(404).json({ Error: "Person not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting person", details: err.message });
    };
};

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
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({ Error: "Error updating person", details: err.message });
    };
};

export {
    readAllPersons,
    readPersonById,
    readPersonByName,
    readPersonsByRole,
    readPersonByPostalCode,
    readPersonByPhoneNumber,
    createPerson,
    deletePersonById,
    updatePersonById,
}