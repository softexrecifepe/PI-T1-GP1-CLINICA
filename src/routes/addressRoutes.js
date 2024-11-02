const express = require('express');
const addressControllers = require("../controllers/addressControllers/addressExports");

const router = express.Router();

router.get('/id/:id', addressControllers.readAddressById);
router.get('/street/:addressStreet', addressControllers.readAddressByAddressStreet);
router.get('/city/:city', addressControllers.readAddressByCity);
router.get('/postalcode/:postalCode', addressControllers.readAddressByPostalCode);
router.post('/', addressControllers.createAddress);
router.delete('/id/:id', addressControllers.deleteAddressById);
router.put('/id/:id', addressControllers.updateAddressById);

module.exports = router;