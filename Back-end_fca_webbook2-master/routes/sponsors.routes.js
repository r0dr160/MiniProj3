const express = require('express');
const router = express.Router();
const Sponsor = require('../models/sponsors.model');

/**
 * @swagger
 * tags:
 *   name: Sponsors
 *   description: Gerenciamento de patrocinadores
 */

/**
 * @swagger
 * /api/sponsors:
 *   get:
 *     summary: Retorna todos os patrocinadores
 *     tags: [Sponsors]
 *     responses:
 *       200:
 *         description: Lista de todos os patrocinadores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sponsor'
 */
router.get('/', async (req, res) => {
    try {
        const sponsors = await Sponsor.find();
        res.json(sponsors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/sponsors:
 *   post:
 *     summary: Cria um novo patrocinador
 *     tags: [Sponsors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sponsor'
 *     responses:
 *       201:
 *         description: Patrocinador criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sponsor'
 *       400:
 *         description: Erro na validação dos dados.
 */
router.post('/', async (req, res) => {
    const sponsor = new Sponsor(req.body);
    try {
        const newSponsor = await sponsor.save();
        res.status(201).json(newSponsor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/sponsors/{id}:
 *   put:
 *     summary: Atualiza um patrocinador existente
 *     tags: [Sponsors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do patrocinador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sponsor'
 *     responses:
 *       200:
 *         description: Patrocinador atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sponsor'
 *       404:
 *         description: Patrocinador não encontrado.
 *       400:
 *         description: Erro na validação dos dados.
 */
router.put('/:id', async (req, res) => {
    try {
        const sponsor = await Sponsor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!sponsor) {
            return res.status(404).json({ message: 'Patrocinador não encontrado' });
        }
        res.json(sponsor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/sponsors/{id}:
 *   delete:
 *     summary: Remove um patrocinador
 *     tags: [Sponsors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do patrocinador
 *     responses:
 *       200:
 *         description: Patrocinador removido com sucesso.
 *       404:
 *         description: Patrocinador não encontrado.
 */
router.delete('/:id', async (req, res) => {
    try {
        const sponsor = await Sponsor.findByIdAndDelete(req.params.id);
        if (!sponsor) {
            return res.status(404).json({ message: 'Patrocinador não encontrado' });
        }
        res.json({ message: 'Patrocinador removido com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
