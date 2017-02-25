'use strict';

const CODE = require('../utils')['CODE'];


class UserController {
  constructor() {
    // super();
  }

  create (req, res, next) {

  }

  get (req, res, next) {
    return res.json(CODE.results(CODE.SUCCESS));
  }

  query (req, res, next) {
    return res.json();
  }

  update (req, res, next) {
    return res.json();
  }
};


module.exports = UserController;
