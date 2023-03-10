'use strict';

const logger = require('../middleware/logger');

describe('Logger middleware', () => {
  let req = { method: 'GET', path: '/' };
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();
  it('logs method and path', () => {
    logger(req, res, next);
    let method = req.method;
    let path = req.path;

    expect(console.log).toHaveBeenCalledWith({ method, path });
    expect(next).toHaveBeenCalledWith();
  });
});
