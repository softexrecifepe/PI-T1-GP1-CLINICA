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
    PersonRegister.hasOne(Role, { foreignKey: 'personregisterid', sourceKey: 'id' });

    Address.belongsTo(PersonRegister, { foreignKey: 'personregisterid', targetKey: 'id' });
    Contact.belongsTo(PersonRegister, { foreignKey: 'personregisterid', targetKey: 'id' });
    Role.belongsTo(PersonRegister, { foreignKey: 'personregisterid', targetKey: 'id' });

    // Role associations
    Role.hasMany(Pet, { foreignKey: 'tutorId' });
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
    Treatment.belongsTo(Patient, { foreignKey: 'patientId' });

    // PatientsDailyChart associations
    PatientsDailyChart.belongsTo(Role, { foreignKey: 'roleId' });
    PatientsDailyChart.belongsTo(Treatment, { foreignKey: 'treatmentId' });

};

defineAssociations();

module.exports = defineAssociations;