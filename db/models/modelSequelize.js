const { sequelize } = require('../../connection/connectionSequelize');
const { DataTypes } = require("sequelize")

// Modelo para a tabela `personRegister`
const PersonRegister = sequelize.define('PersonRegister', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
  },
});

// Modelo para a tabela `address`
const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  addressStreet: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  addressNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  postalCode: {
    type: DataTypes.STRING(9),
    allowNull: false,
  },
});

// Modelo para a tabela `contact`
const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  phoneNumber: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

// Modelo para a tabela `role`
const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleType: {
    type: DataTypes.ENUM('Tutor', 'Vet', 'Nurse'),
    allowNull: false,
  },
  crmv: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
});

// Modelo para a tabela `pet`
const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  weight: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  sex: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  behavior: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  neurologicalDisorders: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Modelo para a tabela `patient`
const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  admission: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  atArrivalPatientStatus: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  injuries: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  medicatedAtArrival: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  contagious: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
});

// Modelo para a tabela `cage`
const Cage = sequelize.define('Cage', {
  cageNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

// Modelo para a tabela `treatment`
const Treatment = sequelize.define('Treatment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  exams: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  symptoms: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recomendations: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isAlergic: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  alergicTo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  specialConditions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dischargePreview: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dischargeNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Modelo para a tabela `medication`
const Medication = sequelize.define('Medication', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  doseByKg: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  administrationRoute: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  administredAt: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  frequency: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  isAdministred: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

// Modelo para a tabela `patientsDailyChart`
const PatientsDailyChart = sequelize.define('PatientsDailyChart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  avaliationTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  symptoms: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  alimentation: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  feedingProbe: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  glicose: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  bpm: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  fr: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  normalUrine: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isBetter: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  generalStatus: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  vetNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Associações entre os modelos
PersonRegister.hasMany(Address, { foreignKey: 'personRegisterId' });
PersonRegister.hasMany(Contact, { foreignKey: 'personRegisterId' });
PersonRegister.hasMany(Role, { foreignKey: 'personRegisterId' });

Role.hasMany(Pet, { foreignKey: 'tutorId' });
Role.hasMany(Patient, { foreignKey: 'vetId' });
Pet.belongsTo(Role, { foreignKey: 'tutorId' });

Patient.hasMany(Treatment, { foreignKey: 'patientId' });
Patient.belongsTo(Pet, { foreignKey: 'petId' });
Treatment.hasMany(Medication, { foreignKey: 'treatmentId' });
Treatment.hasMany(PatientsDailyChart, { foreignKey: 'treatmentId' });

PatientsDailyChart.belongsTo(Role, { foreignKey: 'roleId' });
Patient.belongsTo(Cage, { foreignKey: 'patientId' });

module.exports = {
  sequelize,
  PersonRegister,
  Address,
  Contact,
  Role,
  Pet,
  Patient,
  Cage,
  Treatment,
  Medication,
  PatientsDailyChart
}
