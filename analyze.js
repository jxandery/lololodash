var _ = require('lodash');

var worker = function (items) {

  items = _.sortBy(items, "income");

  var incometotal = _.reduce(items, function(sum, num) {
    return sum + num.income;
  }, 0);

  var average = incometotal / items.length;

  var underperform = _.filter(items, function (num) {
    return num.income <= average;
  });

  var overperform = _.filter(items, function (num) {
    return num.income > average;
  });

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = worker;
