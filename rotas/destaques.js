const express = require('express');
const router = express.Router();
const Destaque = require('../modelos/Destaque');
const Fonte = require('../modelos/Fonte');
const Tag = require('../modelos/Tag');

router.post('/', async (req, res) => {
    try {
        const { fonte, texto, anotacao, tags } = req.body;
        let fonteDocumento = await Fonte.findOne({ nome: fonte.nome, tipo: fonte.tipo });
        if (!fonteDocumento) {
            fonteDocumento = new Fonte(fonte);
            await fonteDocumento.save();
        }

        const tagsIds = [];
        if (tags) {
            for (const nomeTag of tags) {
                let tag = await Tag.findOne({ nome: nomeTag });
                if (!tag) {
                    tag = new Tag({ nome: nomeTag });
                    await tag.save();
                }
                tagsIds.push(tag._id);
            }
        }
        const novoDestaque = new Destaque({ fonteId: fonteDocumento._id, texto, anotacao, tags: tagsIds });
        const destaqueSalvo = await novoDestaque.save();
        res.status(201).json(destaqueSalvo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensagem: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const destaques = await Destaque.find().populate('fonteId').populate('tags');
        res.json(destaques);
    } catch (err) {
        res.status(500).json({ mensagem: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const destaque = await Destaque.findById(req.params.id).populate('fonteId').populate('tags');
        if (!destaque) {
            return res.status(404).json({ mensagem: 'Destaque não encontrado' });
        }
        res.json(destaque);
    } catch (err) {
        res.status(500).json({ mensagem: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { fonte, texto, anotacao, tags } = req.body;

        let fonteDocumento = await Fonte.findOne({ nome: fonte.nome, tipo: fonte.tipo });
        if (!fonteDocumento) {
            fonteDocumento = new Fonte(fonte);
            await fonteDocumento.save();
        }

        const tagsIds = [];
        if (tags) {
            for (const nomeTag of tags) {
                let tag = await Tag.findOne({ nome: nomeTag });
                if (!tag) {
                    tag = new Tag({ nome: nomeTag });
                    await tag.save();
                }
                tagsIds.push(tag._id);
            }
        }

        const destaqueAtualizado = await Destaque.findByIdAndUpdate(
            req.params.id,
            { fonteId: fonteDocumento._id, texto, anotacao, tags: tagsIds, atualizadoEm: Date.now() },
            { new: true }
        );

        if (!destaqueAtualizado) {
            return res.status(404).json({ mensagem: 'Destaque não encontrado' });
        }
        res.json(destaqueAtualizado);
    } catch (err) {
        res.status(500).json({ mensagem: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const destaqueDeletado = await Destaque.findByIdAndDelete(req.params.id);
        if (!destaqueDeletado) {
            return res.status(404).json({ mensagem: 'Destaque não encontrado' });
        }
        res.json({ mensagem: 'Destaque excluído com sucesso' });
    } catch (err) {
        res.status(500).json({ mensagem: err.message });
    }
});

module.exports = router;