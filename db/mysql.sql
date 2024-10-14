-- Tabela de pessoas
CREATE TABLE personRegister (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    cpf VARCHAR(14)
);

-- Tabela de endereço
CREATE TABLE address (
    id INT PRIMARY KEY,
    addressStreet VARCHAR(100),
    addressNumber INT,
    city VARCHAR(100),
    postalCode VARCHAR(9),
    personRegisterId INT,
    FOREIGN KEY (personRegisterId) REFERENCES personRegister(id)
);

-- Tabela de contato
CREATE TABLE contact (
    id INT PRIMARY KEY,
    personRegisterId INT,
    phoneNumber VARCHAR(20),
    email VARCHAR(100),
    FOREIGN KEY (personRegisterId) REFERENCES personRegister(id)
);

-- Tabela de papéis (role)
CREATE TABLE role (
    id INT PRIMARY KEY,
    personRegisterId INT,
    roleType ENUM('Tutor', 'Vet', 'Nurse'),
    crmv VARCHAR(10),
    FOREIGN KEY (personRegisterId) REFERENCES personRegister(id)
);

-- Tabela de animais de estimação
CREATE TABLE pet (
    id INT PRIMARY KEY,
    tutorId INT,
    name VARCHAR(50),
    species VARCHAR(50),
    breed VARCHAR(50),
    color VARCHAR(50),
    weight VARCHAR(10),
    sex CHAR(1),
    age VARCHAR(10),
    photo VARCHAR(255),
    behavior VARCHAR(100),
    neurologicalDisorders BOOLEAN,
    notes TEXT,
    FOREIGN KEY (tutorId) REFERENCES role(id)
);

-- Tabela de pacientes
CREATE TABLE patient (
    id INT PRIMARY KEY,
    admission DATETIME,
    atArrivalPatientStatus VARCHAR(2),
    injuries BOOLEAN,
    medicatedAtArrival BOOLEAN,
    contagious VARCHAR(3),
    petId INT,
    vetId INT,
    FOREIGN KEY (petId) REFERENCES pet(id),
    FOREIGN KEY (vetId) REFERENCES role(id)
);

-- Tabela de gaiolas
CREATE TABLE cage (
    cageNumber INT PRIMARY KEY,
    patientId INT,
    FOREIGN KEY (patientId) REFERENCES patient(id)
);

-- Tabela de tratamento
CREATE TABLE treatment (
    id INT PRIMARY KEY,
    patientId INT,
    exams TEXT,
    symptoms TEXT,
    diagnosis TEXT,
    recomendations TEXT,
    isAlergic BOOLEAN,
    alergicTo TEXT,
    specialConditions TEXT,
    dischargePreview DATETIME,
    dischargeNotes TEXT,
    FOREIGN KEY (patientId) REFERENCES patient(id)
);

-- Tabela de medicação
CREATE TABLE medication (
    id INT PRIMARY KEY,
    treatmentId INT,
    name VARCHAR(100),
    doseByKg VARCHAR(50),
    administrationRoute VARCHAR(50),
    administredAt TIME,
    frequency VARCHAR(10),
    isAdministred BOOLEAN,
    FOREIGN KEY (treatmentId) REFERENCES treatment(id)
);

-- Tabela de ficha diária
CREATE TABLE patientsDailyChart (
    id INT PRIMARY KEY,
    treatmentId INT,
    roleId INT,
    avaliationTime DATETIME,
    symptoms TEXT,
    alimentation BOOLEAN,
    feedingProbe BOOLEAN,
    temperature VARCHAR(10),
    glicose VARCHAR(20),
    bpm VARCHAR(20),
    fr VARCHAR(20),
    normalUrine BOOLEAN,
    isBetter BOOLEAN,
    generalStatus VARCHAR(50),
    notes TEXT,
    vetNotes TEXT,
    FOREIGN KEY (treatmentId) REFERENCES treatment(id),
    FOREIGN KEY (roleId) REFERENCES role(id)
);