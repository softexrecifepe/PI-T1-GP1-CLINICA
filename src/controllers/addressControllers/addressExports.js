const { createAddress } = require("./createAddress");
const { readAddressById, readAddressByAddressStreet, readAddressByCity, readAddressByPostalCode } = require("./getAddress");
const { updateAddressById } = require("./updateAddress");
const { deleteAddressById } = require("./deleteAddress");

module.exports = {
    createAddress,
    readAddressById,
    readAddressByAddressStreet,
    readAddressByCity,
    readAddressByPostalCode,
    updateAddressById,
    deleteAddressById
}