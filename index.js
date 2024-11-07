// index.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'https:'],
        scriptSrc: ["'self'", 'https:']
    }
}));
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy({ policy: "same-origin" }));
app.use(helmet.dnsPrefetchControl({ allow: false }));
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true }));
app.use(helmet.xssFilter());

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
