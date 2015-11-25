var _ = require('lodash');

var worker = function (comments) {
  var counted = [];
  var results = _.groupBy(comments, "username");
  _.forEach(results, function (userComment, name) {
    counted.push({
      username: name,
      comment_count: _.size(userComment)
    });
  });
  return _.sortBy(counted, "comment_count").reverse();
};

module.exports = worker;
