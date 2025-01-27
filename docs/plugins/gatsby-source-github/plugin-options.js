'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.schema = undefined;

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const schema = (exports.schema = _yup2.default.object().shape({
  headers: _yup2.default.object().shape({
    Authorization: _yup2.default
      .string()
      .matches(/^Bearer\s.*/, {
        message:
          'headers.Authorization must include Bearer token, e.g. `Bearer YOUR_TOKEN_HERE`',
      })
      .required(),
  }),
  queries: _yup2.default
    .array()
    .min(1)
    .required(),
  url: _yup2.default.string().default(`https://api.github.com/graphql`),
}));
