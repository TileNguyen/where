'use strict';

var _ = require('lodash');


const CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  ERROR: 500,
  UNSUPPORTED: 4000,
  UUID_DUPLICATE: 11000
};

const MESSAGE = {
  '200': 'Success',
  '400': 'Bad request',
  '401': 'User unauthorized',
  '404': 'Not found',
  '500': 'Error',
  '4000': 'unsupported api',
  '11000': 'User duplicate uuid'
};


(() => {
  for (let k in CODE) {
    exports[k] = CODE[k]
  }
})();
const results = (code, data) => {
  if (!data) data = [];
  if (_.isObject(code)) {
    data = _.assignIn(code);
    code = CODE.SUCCESS;
  }
  return {
    code: code,
    message: MESSAGE[`${code}`],
    data: data
  }
};

module.exports['results'] = results;
