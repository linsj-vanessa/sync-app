const revisoesServico = require('../servicos/revisoes');

     const criarRevisao = async (req, res) => {
         try {
             const revisao = await revisoesServico.criarRevisao(req.body);
             res.status(201).json(revisao);
         } catch (error) {
             console.error(error);
             res.status(500).json({ mensagem: error.message });
         }
     }
     const obterRevisoes = async (req, res) => {
         try {
             const revisoes = await revisoesServico.obterRevisoes();
             res.json(revisoes);
         } catch (error) {
             res.status(500).json({ mensagem: error.message });
         }
     }

      module.exports = {
        criarRevisao,
         obterRevisoes
     }