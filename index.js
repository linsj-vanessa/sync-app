require('dotenv').config();
    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const conectarBancoDados = require('./config/db');
    const rotasDestaques = require('./rotas/destaques');
    const rotasFontes = require('./rotas/fontes');
    const rotasTags = require('./rotas/tags');
    const rotasRevisoes = require('./rotas/revisoes');

    const app = express();
    const porta = process.env.PORT || 3000;

    app.use(cors());
    app.use(bodyParser.json());

    conectarBancoDados();

    app.use('/destaques', rotasDestaques);
    app.use('/fontes', rotasFontes);
    app.use('/tags', rotasTags);
    app.use('/revisoes', rotasRevisoes);

    app.listen(porta, () => {
        console.log(`Servidor rodando na porta ${porta}`);
    });