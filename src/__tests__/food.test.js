'use strict';

const { app } = require('../server.js');
const supertest = require('supertest');
const { sequelizedDatabase } = require('../models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizedDatabase.sync();
});

afterAll(async () => {
  await sequelizedDatabase.drop();
});

describe('REST API', () => {
  it('creates food item', async () => {
    let response = await request.post('/food').send({
      name: 'Tester',
    });
    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.id).toBeTruthy();
  });

  it('gets customers', async () => {
    let response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Tester');
    expect(response.body[0].id).toBeTruthy();
  });
});
