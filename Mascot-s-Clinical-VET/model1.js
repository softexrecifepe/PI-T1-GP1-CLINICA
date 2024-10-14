const personRegister = [
    {
        id: 1,
        name: "Fulano",
        cpf: "123.456.789-10"
    }
];

const address = [
    {
        id: 1,
        addressStreet: "Rua dos bobos",
        addressNumber: 73,
        city: "Recife",
        postalCode: "50.123.124",
        personRegisterId: 1
    }
];

const contact = [
    {
        id: 1,
        personRegisterId: 1,
        phoneNumber: "(81) 9.1234-5678",
        email: "fulano@mail.com"
    }
];

const tutor = [
    {
        id: 1,
        personRegisterId: 1
    }
];

const vet = [
    {
        id: 1,
        personRegisterId: 2
    }
];

const nurse = [
    {
        id: 1,
        personRegisterId: 3
    }
];

const pet = [
    {
        id: 1,
        tutorId: 1,
        name: "Rocky",
        species: "Gato",
        breed: "Bob Colonial",
        color: "Branco",
        weight: "9KG",
        sex: "M or F",
        photo: "./photo.jpg",
        behavior: "Arisco",
        neurologicalDisorders: false,
        notes: "Gato muito brabo, cuidado"
    }
];

const patient = [
    {
        id: 1,
        admission: "2024-10-04 08:00:00",
        atArrivalPatientStatus: "E, G ou GR",
        injuries: false,
        medicatedAtArrival: true,
        contagious: "Yes or no",
        petId: 1,
        vetId: 1
    }
];

const cage = [
    {
        cageNumber: 1,
        patientId: 1
    }
];

const treatment = [
    {
        id: 1,
        patientId: 1,
        exams: "Ultrassonografia, raio-x",
        symptoms: "Diarréia, febre",
        diagnosis:"Obstrução intestinal",
        recomendations: "Colocar a recomendação e as contraindicações do tratamento",
        isAlergic: true,
        alergicTo: "Nome da medicação que é alergico",
        specialConditions: "Diabético",
        dischargePreview: "2024-10-11 08:00:00",
        dischargeNotes: "Observações do veterinário pós alta"
    }
];

const medication = [
    {
        id: 1,
        treatmentId: 1,
        name: "Tylenol 500mg",
        doseByKg: "50ml",
        administrationRoute: "Oral",
        administredAt: "08:00:00", 
        frequency: "SID, BID or TID",
        isAdministred: true,
    }
];

const patientsDailyChart = [
    {
        id: 1,
        treatmentId: 1,
        nurseId: 1,
        avaliationTime: "2024-10-04 08:00:00",
        symptoms: "Ainda tem febre, diárreia",
        alimentation: true,
        feedingProbe: false,
        temperature: "35°C",
        glicose: "80mg/dL",
        bpm: "120bpm",
        fr: "30ipm",
        normalUrine: true,
        isBetter: true,
        generalStatus: "Ativo ou apático",
        notes: "Anotações rotineiras do enfermeiro", 
        vetNotes: "Anotações do veterinário durante o tratamento"
    }
];






