'use strict';

let middle = require('./middleware');
const CODE = require('./code_status');

console.log(CODE);
module.exports = {
  middleWare: middle,
  CODE: CODE
}
