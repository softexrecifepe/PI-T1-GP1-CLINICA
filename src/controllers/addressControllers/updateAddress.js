const {Address} = require("../../models/address.js");
require("../../models/associations.js");

async function updateAddressById(req, res) {
    try {
        const { id } = req.params; 
        const { addressStreet, addressNumber, city, postalCode, personRegisterId } = req.body;
        const address = await Address.findByPk(id);
        
        if (!address) {
            return res.status(404).json({ Error: "Address not found" });
        }

        await address.update({ 
            addressStreet: addressStreet || address.addressstreet, 
            addressNumber: addressNumber || address.addressnumber,
            city: city || address.city,
            postalCode: postalCode || address.postalcode
        });

        res.status(200).json(address);
    } catch (err) {
        res.status(500).json({ Error: "Error updating address", details: err.message });
    };
};

module.exports = {
    updateAddressById
}