'use strict';

const express = require('express');
const { foodModel } = require('../models/index.js');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  const food = await foodModel.findAll();
  res.status(200).send(food);
});

router.get('/food/:id', async (req, res, next) => {
  const food = await foodModel.findAll({where: {id:req.params.id}});
  res.status(200).send(food);
});

router.post('/food', async (req, res, next) => {
  try {
    console.log('this is the body', req.query);
    const newFood = await foodModel.create(req.query);
    res.status(200).send(newFood);
  } catch(e){
    next(e);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    const item = await foodModel.destroy({where:{id:req.params.id}});
    res.status(200).json(item[0]);
  } catch (e) {
    next(e);
  }
});

router.put('/food/:id', async (req, res, next) =>{
  try{
    const item = await foodModel.update({name: req.query.name}, {where:{id:req.params.id}});
    res.status(200).json(item[0]);
  }catch(e){
    next(e);
  }
});

module.exports = router;
