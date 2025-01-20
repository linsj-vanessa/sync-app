const revisoesServico = require('../servicos/revisoes');

         const criarRevisao = async (req, res, next) => {
             try {
                 const revisao = await revisoesServico.criarRevisao(req.body);
                 res.status(201).json(revisao);
             } catch (error) {
                 next(error);
             }
         }
         const obterRevisoes = async (req, res, next) => {
             try {
                 const revisoes = await revisoesServico.obterRevisoes();
                 res.json(revisoes);
             } catch (error) {
                 next(error);
             }
         }

         module.exports = {
         criarRevisao,
             obterRevisoes
         }