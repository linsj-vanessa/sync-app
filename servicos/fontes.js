const Fonte = require('../modelos/Fonte');

const criarFonte = async (dadosFonte) => {
    const novaFonte = new Fonte(dadosFonte);
    return await novaFonte.save();
}

const obterFontes = async () => {
    return await Fonte.find();
}
module.exports = {
   criarFonte,
   obterFontes
}