const {PersonRegister} = require("../../models/personRegister.js");
const {Role} = require("../../models/role.js");
const { Address } = require("../../models/address.js");
const { Contact } = require("../../models/contact.js");
require("../../models/associations.js");

async function readAllPersons(req, res) {
    try {
        const person = await PersonRegister.findAll();
        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    };
};

async function readAllPersonCompleteRegister(req, res) {
    try {
        const person = await PersonRegister.findAll({
            include: [{
                model: Address,
                attributes: [
                    'addressStreet',
                    'addressNumber',
                    'city',
                    'postalCode'
                ],
            },
            {
                model: Contact,
                attributes: [
                    'email',
                    'phoneNumber'
                ]
            },
            {
                model: Role,
                attributes: [
                    'roleType',
                    'crmv'
                ]
            }]
        });

        res.status(200).json(person);
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    };
};

async function readPersonCompleteRegisterById(req, res) {
    try {
        const { id } = req.params
        const person = await PersonRegister.findByPk(id,
            {include:[
                {model: Address,
                attributes: [
                    'addressStreet',
                    'addressNumber',
                    'city',
                    'postalCode'
                ],
            },
            {
                model: Contact,
                attributes: [
                    'email',
                    'phoneNumber'
                ]
            },
            {
                model: Role,
                attributes: [
                    'roleType',
                    'crmv'
                ]
            }
        ]}
    );
        if (person) {
            res.status(200).json(person)
        } else {
            res.status(404).json({Error: "Person not found"});
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retriving persons", details: err.message});
    }
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
                where: { roleType: role },
                attributes: ['roleType']
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
                where: { postalCode: searchedPostalCode },
                attributes: [
                    'addressStreet',
                    'addressNumber',
                    'city',
                    'postalCode']
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
                where: { phoneNumber: cellPhone},
                attributes: [
                    "phoneNumber",
                    "email",
                ]
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
    readPersonsByRole,
    readAllPersonCompleteRegister,
    readPersonCompleteRegisterById
}