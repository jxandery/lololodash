var _ = require('lodash');

var worker = function (items) {
  var articlesarray = [],
  total = 0;

  var articles = _.groupBy(items, 'article');

  _.forEach(articles, function(item, key) {
    key = parseInt(key);
    total = 0;
    if (item.length === 1) {
      total = item[0].quantity;
    } else {
      total = _.reduce(item , function(sum, item) {
        return sum + item.quantity;
      }, 0);
    };
    articlesarray.push({
      article: key,
      total_orders: total
    });
  });
  articlesarray = _.sortBy(articlesarray, "total_orders").reverse();
  return articlesarray;
};

module.exports = worker;
