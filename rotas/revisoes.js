const express = require('express');
    const router = express.Router();
    const { criarRevisao, obterRevisoes } = require('../controladores/revisoes');

    router.post('/', criarRevisao)
    router.get('/', obterRevisoes);

    module.exports = router;