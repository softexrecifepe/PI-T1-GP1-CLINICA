const { PatientsDailyChart } = require("../../models/patientsDailyChart")
const { Pet } = require("../../models/pet");
const { Role } = require("../../models/role");
const { PersonRegister } = require("../../models/personRegister");
const { Treatment } = require("../../models/treatment");
const { Patient } = require("../../models/patient");
const sequelize = require("../../db/connection");
require("../../models/associations");

async function getDailyChartById(req, res) {
    try {
        const dailyChart = await PatientsDailyChart.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: Role,
                    attributes: [  
                        "roleType",
                        "crmv",
                    ],
                    include: [
                        {
                            model: PersonRegister,
                            attributes: [
                                'cpf',
                                'name',
                            ],
                        },
                    ],
                },
                {
                    model: Treatment,
                    attributes: ['patientId'],
                    include:[
                        {
                            model: Patient,
                            attributes: ['petId'],
                            include: [
                                {
                                    model: Pet,
                                    attributes: ['name']
                                },
                            ],

                    },
                ], 
                },
            ],
        });

        if (dailyChart) {
            res.status(200).json(dailyChart);
        } else {
            res.status(404).json({ message: "Registro não encontrado" });
        }
    } catch (err) {
        res.status(500).json({ message: "Não foi possível obter o registro. " + err });
    }
}

async function getDailyChartByPetName(req, res) {
    try {
        const dailyCharts = await PatientsDailyChart.findAll({
            include: [
                {
                    model: Treatment,
                    required: true,
                    attributes: ['patientId'],
                    include: [
                        {
                            model: Patient,
                            required: true,
                            attributes: ['petId'],
                            include: [
                                {
                                    model: Pet,
                                    where: { name: req.params.petName },
                                    attributes: ['name'],
                                }
                            ]
                        }
                    ]
                    
                },
            ],
        });

        if (dailyCharts.length > 0) {
            res.status(200).json(dailyCharts);
        } else {
            res.status(404).json({ message: "Nenhum registro encontrado para o pet especificado." });
        }
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar registros. " + err });
    }
}

async function getDailyChartByDate(req, res) {
    try {
        const dailyCharts = await PatientsDailyChart.findAll({
            where: sequelize.where(
                sequelize.fn('DATE', sequelize.col('avaliationTime')),
                req.params.date //
            ),
            include: [
                {
                    model: Treatment,
                    required: true,
                    attributes: ['patientId'],
                    include: [
                        {
                            model: Patient,
                            required: true,
                            attributes: ['petId'],
                            include: [
                                {
                                    model: Pet,
                                    attributes: ['name'],
                                }
                            ]
                        }
                    ]
                    
                },
            ],
        });
        if (dailyCharts.length > 0) {
            res.status(200).json(dailyCharts);
        } else {
            res.status(404).json({ message: "Nenhum registro encontrado para a data especificada." });
        }
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar registros. " + err });
    }
}

async function getDailyChartByCPF(req, res) {
    try {
        const dailyCharts = await PatientsDailyChart.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: Role,
                    required: true,
                    attributes: ['personRegisterId'],
                    include: [
                        {
                            model: PersonRegister,
                            where: { cpf: req.params.cpf },
                            attributes: ['cpf'],
                        },
                    ],
                },
                {
                    model: Treatment,
                    attributes: ['patientId'],
                    include:[
                        {
                            model: Patient,
                            attributes: ['petId'],
                            include: [
                                {
                                    model: Pet,
                                    attributes: ['name']
                                },
                            ],

                    },
                ], 
                },
            ],
        });

        if (dailyCharts.length > 0) {
            res.status(200).json(dailyCharts);
        } else {
            res.status(404).json({ message: "Nenhum registro encontrado para o CPF especificado." });
        }
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar registros. " + err });
    }
}

async function getAllDailyCharts(req, res) {
    try {
        const dailyCharts = await PatientsDailyChart.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: Role,
                    attributes: [  
                        "roleType",
                        "crmv",
                    ],
                    include: [
                        {
                            model: PersonRegister,
                            attributes: [
                                'cpf',
                                'name',
                            ],
                        },
                    ],
                },
                {
                    model: Treatment,
                    attributes: ['patientId'],
                    include:[
                        {
                            model: Patient,
                            attributes: ['petId'],
                            include: [
                                {
                                    model: Pet,
                                    attributes: ['name']
                                },
                            ],

                    },
                ], 
                },
            ],
        });

        if (dailyCharts.length > 0) {
            res.status(200).json(dailyCharts);
        } else {
            res.status(404).json({ message: "Nenhum registro encontrado" });
        }
    } catch (err) {
        res.status(500).json({ message: "Não foi possível obter o registros. " + err });
    }
}


module.exports = {
    getDailyChartById,
    getDailyChartByPetName,
    getDailyChartByDate,
    getDailyChartByCPF,
    getAllDailyCharts
};
