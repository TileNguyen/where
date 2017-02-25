'use strict';

var express           = require('express'),
router                = express.Router();

var UserController = require('../controllers/UserController');


router.get('/users', UserController.get);
router.post('/users', UserController.create);
router.get('/users/:id', UserController.query);
router.put('/users/:id', UserController.update);


module.exports = router;
