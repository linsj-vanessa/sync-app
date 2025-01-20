const destaquesServico = require('../servicos/destaques');

const criarDestaque = async (req, res, next) => {
    try {
    const destaque = await destaquesServico.criarDestaque(req.body)
    res.status(201).json(destaque);
    } catch (err) {
        next(err);
    }
};
const obterDestaques = async (req, res, next) => {
    try {
    const destaques = await destaquesServico.obterDestaques()
    res.json(destaques);
    } catch (err) {
        next(err);
    }
};

const obterDestaquePorId = async (req, res, next) => {
try {
    const destaque = await destaquesServico.obterDestaquePorId(req.params.id)
    res.json(destaque);
} catch (err) {
     next(err);
}
};
const atualizarDestaque = async (req, res, next) => {
    try {
    const destaqueAtualizado = await destaquesServico.atualizarDestaque(req.params.id, req.body)
    res.json(destaqueAtualizado);
    } catch (err) {
       next(err);
    }
};

const excluirDestaque = async (req, res, next) => {
    try {
    const result = await destaquesServico.excluirDestaque(req.params.id)
    res.json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    criarDestaque,
    obterDestaques,
    obterDestaquePorId,
    atualizarDestaque,
    excluirDestaque,
};