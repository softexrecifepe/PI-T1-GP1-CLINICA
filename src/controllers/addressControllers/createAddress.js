const {Address} = require("../../models/address.js");
require("../../models/associations.js");

async function createAddress(req, res) {
    try {
        const { addressStreet, addressNumber, city, postalCode, personRegisterId } = req.body;
        const newAddress = await Address.create({
            addressStreet,
            addressNumber,
            city,
            postalCode,
            personRegisterId
        });
        res.status(201).json(newAddress);
    } catch (err) {
        res.status(500).json({ Error: "Error creating address", err });
    };
};

module.exports = {
    createAddress
}