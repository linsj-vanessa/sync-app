const Tag = require('../modelos/Tag');

const criarTag = async (dadosTag) => {
   const novaTag = new Tag(dadosTag);
   return await novaTag.save();
}

const obterTags = async () => {
   return await Tag.find();
}

module.exports = {
   criarTag,
   obterTags
}