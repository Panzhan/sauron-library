let func = require('./calc');
let data = require('./resource');

module.exports = {
  ...func,
  ...data
}