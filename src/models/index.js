'use strict';

require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');
const clothes = require('./clothes');
const food = require('./food');

// if sqlite::memory does not work, use sqlite:memory
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;
const sequelizedDatabase = new Sequelize(DATABASE_URL);
const clothesModel = clothes(sequelizedDatabase, DataTypes);
const foodModel = food(sequelizedDatabase, DataTypes);

module.exports = {
  sequelizedDatabase,
  clothesModel,
  foodModel,
};
