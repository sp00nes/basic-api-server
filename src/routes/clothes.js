'use strict';

const express = require('express');
const { clothesModel } = require('../models/index.js');

const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const clothes = await clothesModel.findAll();
  res.status(200).send(clothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newClothes = await clothesModel.create(req.body);
    res.status(200).send(newClothes);
  } catch(e){
    next(e);
  }
});



module.exports = router;
