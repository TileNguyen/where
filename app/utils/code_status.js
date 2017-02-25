'use strict';


const CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  ERROR: 500
};

const MESSAGE = {
  '200': 'Success',
  '400': 'Bad request',
  '401': 'User unauthorized',
  '404': 'Not found',
  '500': 'Error'
};


(() => {
  for (let k in CODE) {
    exports[k] = CODE[k]
  }
})();
const results = (code) => {
  return {
    code: code,
    message: MESSAGE[`${code}`]
  }
};

module.exports['results'] = results;
