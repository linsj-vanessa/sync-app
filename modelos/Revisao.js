const mongoose = require('mongoose');

const revisaoSchema = new mongoose.Schema({
    destaqueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destaque', required: true },
    proximaRevisaoEm: { type: Date, required: true },
    intervalo: { type: Number, default: 1 },
    fatorFacilidade: { type: Number, default: 2.5 },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Revisao', revisaoSchema);