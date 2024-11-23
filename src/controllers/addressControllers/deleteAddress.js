const {Address} = require("../../models/address.js");
require("../../models/associations.js");

async function deleteAddressById(req, res) {
    const {id} = req.params;

    try {
        const address = await Address.findByPk(id);
        if (!address) {
            return res.status(404).json({ message: "Address not fund" });
        }

        await address.destroy();
        res.status(200).json({ message: "Address deleted successsfully" });
      } catch (error) {
        console.error("Error deleting address:", error);
        res.status(400).json({ error: error.message });
      }
};

module.exports = {
    deleteAddressById
}