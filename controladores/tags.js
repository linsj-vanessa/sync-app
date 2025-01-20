const tagsServico = require('../servicos/tags');

     const criarTag = async (req, res, next) => {
         try {
         const tag = await tagsServico.criarTag(req.body)
         res.status(201).json(tag);
         } catch (error) {
            next(error);
         }
     }

     const obterTags = async (req, res, next) => {
     try {
         const tags = await tagsServico.obterTags();
         res.json(tags);
     } catch (error) {
             next(error);
     }
     }

     module.exports = {
     criarTag,
     obterTags
     }
  ```