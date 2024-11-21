const {Address} = require("../../models/address.js");
require("../../models/associations.js");

async function deleteAddressById(req, res) {
    try {
        const { id } = req.params;
        const deletedAddress = await Address.destroy({ where: { id } });
        if (deletedAddress) {
            res.status(204).json({message: "Endereço deletado com sucesso!"});
        } else {
            res.status(404).json({ Error: "Address not found" });
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting address", details: err.message });
    };
};

module.exports = {
    deleteAddressById
}