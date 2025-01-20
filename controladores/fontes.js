const fontesServico = require('../servicos/fontes');

    const criarFonte = async (req, res, next) => {
        try {
        const fonte = await fontesServico.criarFonte(req.body);
        res.status(201).json(fonte);
        } catch (error) {
            next(error);
        }
    }
    const obterFontes = async (req, res, next) => {
        try {
        const fontes = await fontesServico.obterFontes();
            res.json(fontes)
        } catch (error) {
            next(error);
        }
    }
    module.exports = {
    criarFonte,
    obterFontes
    }