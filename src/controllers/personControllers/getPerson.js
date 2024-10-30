const PersonRegister = require("../../models/personRegister.js");
const Role = require("../../models/role.js");
const Address = require("../models/address.js");
require("../../models/associations.js");

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

module.exports = {
    readAllPersons,
    readPersonById,
    readPersonByName,
    readPersonByPhoneNumber,
    readPersonByPostalCode,
    readPersonsByRole
}