'use strict';

const express = require('express');
const { clothesModel } = require('../models/index.js');

const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const clothes = await clothesModel.findAll();
  res.status(200).send(clothes);
});

router.get('/clothes/:id', async (req, res, next) => {
  const clothes = await clothesModel.findAll({where: {id:req.params.id}});
  res.status(200).send(clothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    const newClothes = await clothesModel.create(req.query);
    res.status(200).send(newClothes);
  } catch (e) {
    next(e);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    const item = await clothesModel.destroy({where:{id:req.params.id}});
    res.status(200).json(item[0]);
  } catch (e) {
    next(e);
  }
});

router.put('/clothes/:id', async (req, res, next) =>{
  try{
    const item = await clothesModel.update({name: req.query.name}, {where:{id:req.params.id}});
    res.status(200).json(item[0]);
  }catch(e){
    next(e);
  }
});

module.exports = router;
