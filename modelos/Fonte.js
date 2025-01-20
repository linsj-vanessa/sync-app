const mongoose = require('mongoose');

const fonteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    autor: { type: String },
    titulo: { type: String },
    criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fonte', fonteSchema);