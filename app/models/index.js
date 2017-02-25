'use strict';

module.export = require('require-all')({
  dirname: __dirname + '/models',
  filter: /(.+Model)\.js$/,
  excludeDirs: /^\.(git|svn)$/,
  recursive: true
});
