import express from 'express'
import { 
    readAllPersons,
    readPersonById,
    readPersonByName,
    readPersonsByRole,
    readPersonByPostalCode,
    readPersonByPhoneNumber,
    createPerson,
    deletePersonById,
    updatePersonById
} from '../controllers/personControllers.js';

const router = express.Router();

router.get('/', readAllPersons);
router.get('/id/:id', readPersonById);
router.get('/name/:name', readPersonByName);
router.get('/role/:role', readPersonsByRole);
router.get('/postalcode/:searchedPostalCode', readPersonByPostalCode);
router.get('/phone/:cellPhone', readPersonByPhoneNumber);
router.post('/', createPerson);
router.delete('/id/:id', deletePersonById);
router.put('/id/:id', updatePersonById);

export default router