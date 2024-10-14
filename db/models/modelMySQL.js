const personRegister = [
    {
        id: 1,
        name: "Fulano",
        cpf: "123.456.789-10"
    },
    {
        id: 2,
        name: "Dr. Beltrano",
        cpf: "987.654.321-00"
    },
    {
        id: 3,
        name: "Enfermeira Ciclana",
        cpf: "123.987.654-22"
    }
];

const address = [
    {
        id: 1,
        addressStreet: "Rua dos Bobos",
        addressNumber: 0,
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

const role = [
    {
        id: 1,
        personRegisterId: 1,
        roleType: "Tutor",
        crmv: null
    },
    {
        id: 2,
        personRegisterId: 2,
        roleType: "Vet",
        crmv: "1234/AB"
    },
    {
        id: 3,
        personRegisterId: 3,
        roleType: "Nurse",
        crmv: null
    }
];

const pet = [
    {
        id: 1,
        roleId: 1,
        name: "Rocky",
        species: "Gato",
        breed: "Bob Colonial",
        color: "Branco",
        weight: "9KG",
        sex: "M",
        age: "2 anos",
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
        atArrivalPatientStatus: "G",
        injuries: false,
        medicatedAtArrival: true,
        contagious: "No",
        petId: 1,
        roleId: 2
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
        diagnosis: "Obstrução intestinal",
        recomendations: "Colocar as recomendações e contraindicações do tratamento",
        isAlergic: true,
        alergicTo: "Paracetamol",
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
        frequency: "BID",
        isAdministred: true
    }
];

const patientsDailyChart = [
    {
        id: 1,
        treatmentId: 1,
        roleId: 3, // nurseId substituído pelo roleId
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
        generalStatus: "Ativo",
        notes: "Anotações rotineiras do enfermeiro",
        vetNotes: "Anotações do veterinário durante o tratamento"
    }
];