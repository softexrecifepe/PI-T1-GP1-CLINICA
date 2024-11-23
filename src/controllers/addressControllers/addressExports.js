const { createAddress } = require("./createAddress");
const { readAddressById, readAddressByAddressStreet, readAddressByCity, readAddressByPostalCode, readAllAddress } = require("./getAddress");
const { updateAddressById } = require("./updateAddress");
const { deleteAddressById } = require("./deleteAddress");

module.exports = {
    createAddress,
    readAddressById,
    readAddressByAddressStreet,
    readAddressByCity,
    readAddressByPostalCode,
    readAllAddress,
    updateAddressById,
    deleteAddressById
}