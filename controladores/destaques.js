const destaquesServico = require('../servicos/destaques');

const criarDestaque = async (req, res) => {
    try {
      const destaque = await destaquesServico.criarDestaque(req.body)
      res.status(201).json(destaque);
    } catch (err) {
      console.error(err);
      res.status(500).json({ mensagem: err.message });
    }
};
const obterDestaques = async (req, res) => {
    try {
      const destaques = await destaquesServico.obterDestaques()
      res.json(destaques);
    } catch (err) {
      res.status(500).json({ mensagem: err.message });
    }
};

const obterDestaquePorId = async (req, res) => {
   try {
       const destaque = await destaquesServico.obterDestaquePorId(req.params.id)
       res.json(destaque);
   } catch (err) {
        res.status(err.message === 'Destaque não encontrado' ? 404 : 500).json({ mensagem: err.message });
   }
};
const atualizarDestaque = async (req, res) => {
    try {
       const destaqueAtualizado = await destaquesServico.atualizarDestaque(req.params.id, req.body)
       res.json(destaqueAtualizado);
    } catch (err) {
        res.status(err.message === 'Destaque não encontrado' ? 404 : 500).json({ mensagem: err.message });
    }
};

const excluirDestaque = async (req, res) => {
    try {
      const result = await destaquesServico.excluirDestaque(req.params.id)
      res.json(result);
    } catch (err) {
      res.status(err.message === 'Destaque não encontrado' ? 404 : 500).json({ mensagem: err.message });
    }
};

module.exports = {
    criarDestaque,
    obterDestaques,
    obterDestaquePorId,
    atualizarDestaque,
    excluirDestaque,
};