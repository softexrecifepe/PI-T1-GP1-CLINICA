import express from 'express'
const app = express();
import { db } from './connection/connection.js'
const port = 3000;

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.get("/pet", (req, res) => {
    db.query("SELECT * FROM PET", (err, result) => {
        if (err) {
            console.log("Erro ao consultar os Pets", err);
            return res.status(500).json({ error: "Erro interno do servidor" });
        };
        return res.json(result);
    });
});

app.get("/pet/:name", (req, res) => {
    const petName = req.params.name;
    db.query("SELECT * FROM PET WHERE NAME = ?",[petName], (err, result) => {
        if (err) {
            console.log("Erro ao consultar o Pets", err);
            return res.status(404).json({ error: "Pet não encontrado" });
        };
        return res.json(result);
    });
});

app.delete("/pet/:name", (req, res) => {
    const petName = req.params.name;
    db.query("DELETE FROM patient WHERE petId = (SELECT id FROM PET WHERE name = ?)", [petName], (err) => {
        if (err) {
            console.log("Erro ao deletar pacientes", err);
            return res.status(500).json({ error: "Erro interno de servidor" });
        }
    db.query("DELETE FROM PET WHERE NAME = ?", [petName], (err, result) => {
        if (err) {
            console.log("Erro ao deletar o pet", err);
            return res.status(500).json( { error: "Erro interno de servidor"});
        };
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Pet não encontrado "});
        };
        res.json("Pet deletado com sucesso!");
    });
    })  
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
    db.connect((err) => {
        if (err) {
            console.log("Erro ao conectar com o banco de dados", err.stack);
            return;
        };
        console.log("Conectado ao banco de dados!")
    });
});