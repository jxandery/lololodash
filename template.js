var _ = require('lodash');

var worker = function (items) {
  var hellotemplate = "Hello <%= name %> (logins: <%= login.length %>)";

  return _.template(hellotemplate)(items);
};

module.exports = worker;
