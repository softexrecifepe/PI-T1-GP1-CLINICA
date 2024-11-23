const { createCage } = require("./createCage");
const { getAllCages, getCageById } = require("./getCage");
const { updateCage } = require("./updateCage");
const { deleteCageById } = require("./deleteCage");

module.exports = {
    createCage,
    getAllCages,
    getCageById,
    updateCage,
    deleteCageById
}