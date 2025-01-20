const express = require('express');
const router = express.Router();
const { criarTag, obterTags } = require('../controladores/tags');

router.post('/', criarTag);
router.get('/', obterTags);

module.exports = router;