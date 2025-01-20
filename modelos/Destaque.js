const mongoose = require('mongoose');

const destaqueSchema = new mongoose.Schema({
    fonteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Fonte', required: true },
    texto: { type: String, required: true },
    anotacao: { type: String },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    criadoEm: { type: Date, default: Date.now },
    atualizadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Destaque', destaqueSchema);