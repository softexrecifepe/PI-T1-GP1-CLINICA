import Address from "../models/adress.js";
import "../models/associations.js";


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
    }
}


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
    }
}


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
    }
}


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
    }
}

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
        res.status(500).json({ Error: "Error creating address", details: err.message });
    };
};

async function deleteAddressById(req, res) {
    try {
        const { id } = req.params;
        const deletedAddress = await Address.destroy({ where: { id } });
        if (deletedAddress) {
            res.status(204).send();
        } else {
            res.status(404).json({ Error: "Address not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting address", details: err.message });
    };
};

async function updateAddressById(req, res) {
    try {
        const { id } = req.params; 
        const { addressStreet, addressNumber, city, postalCode, personregisterId } = req.body;
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

export {
    readAddressById,
    readAddressByAddressStreet,
    readAddressByCity,
    readAddressByPostalCode,
    createAddress,
    deleteAddressById,
    updateAddressById,
};