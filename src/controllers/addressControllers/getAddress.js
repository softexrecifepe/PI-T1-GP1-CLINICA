const {Address} = require("../../models/address.js");
const { PersonRegister } = require("../../models/personRegister.js");
require("../../models/associations.js");

async function readAddressById(req, res) {
    try {
        const { id } = req.params;
        const address = await Address.findByPk(id, {
            include:[
                {
                    model: PersonRegister,
                    attributes:[
                        'name',
                        'cpf'
                    ]
                }
            ]
        });
        if (address) {
            res.status(200).json(address);
        } else {
            res.status(404).json({ Error: "Address not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving address", details: err.message });
    };
};

async function readAddressByAddressStreet(req, res) {
    try {
        const { addressStreet } = req.params;
        const addresses = await Address.findAll({
            where: { addressStreet },
            include:[
                {
                    model: PersonRegister,
                    attributes:[
                        'name',
                        'cpf'
                    ]
                }
            ]
        });

        if (addresses.length > 0) {
            res.status(200).json(addresses);
        } else {
            res.status(404).json({ Error: "No addresses found with this street name" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving addresses", details: err.message });
    };
};

async function readAddressByCity(req, res) {
    try {
        const { city } = req.params;
        const addresses = await Address.findAll({
            where: { city },
            include:[
                {
                    model: PersonRegister,
                    attributes:[
                        'name',
                        'cpf'
                    ]
                }
            ]
        });

        if (addresses.length > 0) {
            res.status(200).json(addresses);
        } else {
            res.status(404).json({ Error: "No addresses found in this city" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving addresses", details: err.message });
    };
};

async function readAddressByPostalCode(req, res) {
    try {
        const { postalCode } = req.params;
        const addresses = await Address.findAll({
            where: { postalCode },
            include:[
                {
                    model: PersonRegister,
                    attributes:[
                        'name',
                        'cpf'
                    ]
                }
            ]
        });

        if (addresses.length > 0) {
            res.status(200).json(addresses);
        } else {
            res.status(404).json({ Error: "No addresses found with this postal code" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving addresses by postal code", details: err.message });
    };
};

async function readAllAddress(req, res) {
    try {
        const address = await Address.findAll({
            include:[
                {
                    model: PersonRegister,
                    attributes:[
                        'name',
                        'cpf'
                    ]
                }
            ]
        });
        res.status(200).json(address);
    } catch (error) {
        console.error("Error fetching address:", error);
        res.status(400).json({error: error.message});
    }
    
}

module.exports = {
    readAddressById,
    readAddressByAddressStreet,
    readAddressByCity,
    readAddressByPostalCode,
    readAllAddress
}