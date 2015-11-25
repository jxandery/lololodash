var _ = require('lodash');

var worker = function(items) {
    return  _.chain(items)
    .sort()
    .map(function(word){
      return (word + 'CHAINED').toUpperCase();
    });
};

module.exports = worker;
