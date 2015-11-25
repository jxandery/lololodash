var _ = require('lodash');


var worker = function(item) {

  var result = {hot: [],
    warm: []};

  var checkTemp = function(item) {
    return item > 19;
  };

  _.forEach(item, function(city, cityName){
    if (_.every(city, checkTemp)) {
      result.hot.push(cityName);
    } else if (_.some(city, checkTemp)) {
      result.warm.push(cityName);
    }
  });
  return result;
};

module.exports = worker;
