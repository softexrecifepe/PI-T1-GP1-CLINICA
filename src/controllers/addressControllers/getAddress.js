const {Address} = require("../../models/address.js");
require("../../models/associations.js");

async function readAddressById(req, res) {
    try {
        const { id } = req.params;
        const address = await Address.findByPk(id);
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
            where: { addressStreet }
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
            where: { city }
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
            where: { postalCode }
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

module.exports = {
    readAddressById,
    readAddressByAddressStreet,
    readAddressByCity,
    readAddressByPostalCode
}