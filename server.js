'use strict';

var express             = require('express'),
path                    = require('path'),
logger                  = require('morgan'),
cookieParser            = require('cookie-parser'),
bodyParser              = require('body-parser'),
http                    = require('http'),
session                 = require('express-session');



var app = express(),
httpServer    = http.Server(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// use library
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// allow cross-origin
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
  return next();
});

// middleware

// api


// unsupported api
app.use((req, res, next) => {
  return res.json({});
});
// error response


//  server listen
httpServer.listen(8000,() => {
  console.log('Server listen port ' + 8000);
});
