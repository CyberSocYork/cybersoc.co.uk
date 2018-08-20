var isArray = require('isarray');

module.exports = function(value) {
  if(value === undefined)
    return [];
  else if(isArray(value))
    return value;
  else
    return [value];
};