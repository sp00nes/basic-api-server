'use strict';

const express = require('express');
const { foodModel } = require('../models/index.js');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  const food = await foodModel.findAll();
  res.status(200).send(food);
});

router.post('/food', async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newFood = await foodModel.create(req.body);
    res.status(200).send(newFood);
  } catch(e){
    next(e);
  }
});



module.exports = router;
