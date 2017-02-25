'use strict';

var express           = require('express'),
router                = express.Router();

var UserController = require('../controllers/UserController'),
userController = new UserController();


router.get('/users', userController.get);
router.post('/users', userController.create);
router.get('/users/:id', userController.query);
router.put('/users/:id', userController.update);


module.exports = router;
