const { PatientsDailyChart } = require("../../models/patientsDailyChart");
const { Pet } = require("../../models/pet");
const { Role } = require("../../models/role");
const { PersonRegister } = require("../../models/personRegister");
require("../../models/associations");

// Buscar registro por ID
async function getDailyChartById(req, res) {
    try {
        const dailyChart = await PatientsDailyChart.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: Role,
                    include: [
                        {
                            model: PersonRegister,
                            attributes: ['cpf'], // Inclui CPF
                        },
                    ],
                },
                {
                    model: Pet,
                    attributes: ['name'], // Inclui nome do pet
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

// Buscar registros por nome do pet
async function getDailyChartByPetName(req, res) {
    try {
        const dailyCharts = await PatientsDailyChart.findAll({
            include: [
                {
                    model: Pet,
                    where: { name: req.params.name }, // Busca por nome do pet
                    attributes: ['name'],
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

// Buscar registros por data específica
async function getDailyChartByDate(req, res) {
    try {
        const dailyCharts = await PatientsDailyChart.findAll({
            where: sequelize.where(
                sequelize.fn('DATE', sequelize.col('avaliationTime')),
                req.params.date // Data no formato YYYY-MM-DD
            ),
            include: [
                {
                    model: Pet,
                    attributes: ['name'],
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

// Buscar registros por CPF
async function getDailyChartByCPF(req, res) {
    try {
        const dailyCharts = await PatientsDailyChart.findAll({
            include: [
                {
                    model: Role,
                    include: [
                        {
                            model: PersonRegister,
                            where: { cpf: req.params.cpf }, // Busca por CPF
                            attributes: ['cpf'],
                        },
                    ],
                },
                {
                    model: Pet,
                    attributes: ['name'],
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

module.exports = {
    getDailyChartById,
    getDailyChartByPetName,
    getDailyChartByDate,
    getDailyChartByCPF
};
