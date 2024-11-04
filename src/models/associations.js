const { PersonRegister } = require('./personRegister.js');
const { Address } = require('./address.js');
const { Contact } = require('./contact.js');
const { Role } = require('./role.js');
const { Pet } = require('./pet.js');
const { Patient } = require('./patient.js');
const { Cage } = require('./cage.js');
const { Treatment } = require('./treatment.js');
const { Medication } = require('./medication.js');
const { PatientsDailyChart } = require('./patientsDailyChart.js');

const defineAssociations = () => {
    // PersonRegister associations
    PersonRegister.hasMany(Address, { foreignKey: 'personregisterid', sourceKey: 'id' });
    PersonRegister.hasMany(Contact, { foreignKey: 'personregisterid', sourceKey: 'id' });
    PersonRegister.hasMany(Role, { foreignKey: 'personregisterid', sourceKey: 'id' });

    Address.belongsTo(PersonRegister, { foreignKey: 'personregisterid', targetKey: 'id' });
    Contact.belongsTo(PersonRegister, { foreignKey: 'personregisterid', targetKey: 'id' });
    Role.belongsTo(PersonRegister, { foreignKey: 'personregisterid', targetKey: 'id' });

    // Role associations
    Role.hasMany(Pet, { foreignKey: 'tutorId', as: 'tutor' });
    Role.hasMany(Patient, { foreignKey: 'vetId' });

    // Pet associations
    Pet.belongsTo(Role, { foreignKey: 'tutorId' });

    // Patient associations
    Patient.hasMany(Treatment, { foreignKey: 'patientId' });
    Patient.belongsTo(Pet, { foreignKey: 'petId' });
    Patient.belongsTo(Cage, { foreignKey: 'patientId' });

    // Treatment associations
    Treatment.hasMany(Medication, { foreignKey: 'treatmentId' });
    Treatment.hasMany(PatientsDailyChart, { foreignKey: 'treatmentId' });

    // PatientsDailyChart associations
    PatientsDailyChart.belongsTo(Role, { foreignKey: 'roleId' });
};

defineAssociations();

module.exports = defineAssociations;