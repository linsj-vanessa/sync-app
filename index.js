require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const conectarBancoDados = require('./config/db');
const rotasDestaques = require('./rotas/destaques');

const app = express();
const porta = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

conectarBancoDados();

app.use('/destaques', rotasDestaques);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});