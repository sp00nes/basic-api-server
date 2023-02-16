'use strict';

const { app } = require('../server.js');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  it('creates food item', async () => {
    let response = await request.post('/customer').send({
      name: 'Tester',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.id).toBeTruthy();
  });

  it('gets customers', async () => {
    let response = await request.get('/customer');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Tester');
    expect(response.body[0].id).toBeTruthy();
  });
});
