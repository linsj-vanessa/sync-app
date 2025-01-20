const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tag', tagSchema);