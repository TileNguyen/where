'use strict';

const CODE = require('../utils')['CODE'];
var Model = require('../models');
var User = Model['UserModel'];


class UserController {
  constructor() {
    // super();
  }

  create (req, res, next) {
    try {
      let data = {
        name: req.body.name,
        uuid: req.body.uuid,
        location: req.body.location
      }

      User.create(data, (err, user) => {
        if(err) return next(err.code);
        return res.json(CODE.results(user));
      });
    } catch (e) {
      return next(e);
    }
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


module.exports = new UserController();
