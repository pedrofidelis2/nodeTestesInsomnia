const express = require('express');
const NotasDAO = require('./daos/NotasDAO.js');

const router = express.Router();
const dao = new NotasDAO();

router.get('/', async(req,res)=>{
    let dados = await dao.obterTodos();
    res.json(dados);
})

router.get('/:id', async(req,res)=>{
    let dados = await dao.obter(req.params.id);
    res.json(dados);
})

router.put('/:id', async(req,res)=>{
    let dados = await dao.alterar(req.params.id,req.body);
    res.json(dados);
})

module.exports = router

