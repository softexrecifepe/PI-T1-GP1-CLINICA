const { createAddress } = require("./createAddress");
const { readAddressById, readAddressByAddressStreet, readAddressByCity, readAddressByPostalCode } = require("./getAddress");
const { updateAddress } = require("./updateAddress");
const { deleteAddress } = require("./deleteAddress");

module.exports = {
    createAddress,
    readAddressById,
    readAddressByAddressStreet,
    readAddressByCity,
    readAddressByPostalCode,
    updateAddress,
    deleteAddress
}