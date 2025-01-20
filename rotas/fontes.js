const express = require('express');
const router = express.Router();
const { criarFonte, obterFontes } = require('../controladores/fontes');

router.post('/', criarFonte);
router.get('/', obterFontes)

module.exports = router;