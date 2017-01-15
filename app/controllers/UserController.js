'use strict';


class UserController {
  constructor() {
    // super();
  }

  create (req, res, next) {

  }

  get (req, res, next) {
    return res.json({message: 'Get all users'});
  }

  query (req, res, next) {
    return res.json();
  }

  update (req, res, next) {
    return res.json();
  }
};


module.exports = UserController;
