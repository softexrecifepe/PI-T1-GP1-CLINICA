import express from 'express';
import {
    readAddressById,
    readAddressByAddressStreet,
    readAddressByCity,
    readAddressByPostalCode,
    createAddress,
    deleteAddressById,
    updateAddressById,
} from '../controllers/addressControllers.js';

const router = express.Router();

router.get('/id/:id', readAddressById);
router.get('/street/:addressStreet', readAddressByAddressStreet);
router.get('/city/:city', readAddressByCity);
router.get('/postalcode/:postalCode', readAddressByPostalCode);
router.post('/', createAddress);
router.delete('/id/:id', deleteAddressById);
router.put('/id/:id', updateAddressById);

export default router;