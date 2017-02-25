'use strict';

var express             = require('express'),
path                    = require('path'),
logger                  = require('morgan'),
cookieParser            = require('cookie-parser'),
bodyParser              = require('body-parser'),
http                    = require('http'),
session                 = require('express-session'),
config                  = require('config'),
mongoose                = require('mongoose');


var utils               = require('./app/utils');
var routes              = require('./app/routes');
const CODE              = utils['CODE'];

var app = express(),
httpServer = http.Server(app);

var mongoCfg = [
  "mongodb://",
  config.mongo.user,
  ":",
  config.mongo.password,
  "@",
  config.mongo.host,
  ":",
  config.mongo.port,
  "/",
  config.mongo.database
];

// connect mongo
mongoose.connect(mongoCfg.join(""));
mongoose.connection.on('error', () => {
  console.error('Connect error', arguments);
});

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

// default url
app.get('/', (req, res, next) => {
  return res.end('Hello client!');
});

// middleware
app.use(utils.middleWare);

// api
app.use(routes['users']);



// unsupported api
app.use((req, res, next) => {
  return res.json(CODE.results(CODE.UNSUPPORTED));
});
// error response
app.use((error, req, res, next) => {
  console.error(error);
  if ('object' === typeof error) {
    error = CODE.ERROR;
  }
  return res.json(CODE.results(error));
});

//  server listen
httpServer.listen(config.port,() => {
  console.log(`Server listen port ${config.port}`);
});
