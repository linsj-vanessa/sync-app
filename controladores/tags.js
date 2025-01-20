// controladores/tags.js
const tagsServico = require('../servicos/tags');

 const criarTag = async (req, res) => {
     try {
       const tag = await tagsServico.criarTag(req.body)
       res.status(201).json(tag);
     } catch (error) {
         console.error(error);
       res.status(500).json({ mensagem: error.message });
     }
 }

 const obterTags = async (req, res) => {
   try {
      const tags = await tagsServico.obterTags();
     res.json(tags);
   } catch (error) {
        res.status(500).json({ mensagem: error.message });
   }
 }

module.exports = {
   criarTag,
   obterTags
}