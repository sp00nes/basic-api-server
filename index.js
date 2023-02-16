'use strict';

const { start } = require('./src/server.js');
const { sequelizedDatabase } = require('./src/models/index.js');

sequelizedDatabase.sync()
  .then(() => {
    console.log('database synced');
    start();
  })
  .catch(e => console.error(e));
