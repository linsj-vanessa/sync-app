    const Revisao = require('../modelos/Revisao');

    const criarRevisao = async (dadosRevisao) => {
        const novaRevisao = new Revisao(dadosRevisao);
        return await novaRevisao.save();
    }

    const obterRevisoes = async () => {
        return await Revisao.find();
    }

    module.exports = {
        criarRevisao,
        obterRevisoes
    }