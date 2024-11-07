// index.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());


app.get('/dados', (req, res) => {
    fs.readFile('produtos.json', "utf-8", (err, data) => {
        if (err) {
            console.error('Tivemos um pequeno erro na conexão, veja:\n' + err);
            res.status(500).json({ error: 'Erro ao ler o arquivo' });
            return;
        }
        const obj = JSON.parse(data);
        console.log(obj);
        res.json(obj);
    });
});

// Exporta a função handler que será usada como endpoint na API do Vercel
module.exports = app;
