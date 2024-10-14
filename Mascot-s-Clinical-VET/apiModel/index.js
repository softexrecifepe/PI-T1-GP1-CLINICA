const express = require("express");
const pets = require("./models/model")
const { conection } = require("./db/connection")
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("helloWorld")
});

app.get("/pets", (req,res) => {
    const sql = 'SELECT * FROM pet'
    conection.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get("/pets", (req,res) => {
    const sql = 'SELECT * FROM pet'
    conection.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
})


app.listen(3000, ()=>{
    conection.connect((err) => {
        if (err){
            console.error('erro ao se conectar com o banco de dados:', err.stack);
            return;
        }
        console.log('conectado ao banco de dados com ID', conection.threadId);
    });

    console.log("server running http://localhost:3000");
})