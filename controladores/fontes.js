 // controladores/fontes.js
 const fontesServico = require('../servicos/fontes');

 const criarFonte = async (req, res) => {
     try {
       const fonte = await fontesServico.criarFonte(req.body);
       res.status(201).json(fonte);
     } catch (error) {
         console.error(error);
         res.status(500).json({ mensagem: error.message });
     }
 }
 const obterFontes = async (req, res) => {
     try {
        const fontes = await fontesServico.obterFontes();
         res.json(fontes)
     } catch (error) {
         res.status(500).json({ mensagem: error.message });
     }
 }
  module.exports = {
    criarFonte,
    obterFontes
 }