function wordCountService() {
  return new WordCount_();
}

function WordCount_() {
  this.str = '';
  this.separator = /\s+/;
}

WordCount_.prototype.setString = function (str) {
  this.str = str;
  return this;
}

WordCount_.prototype.setSeparator = function (separator) {
  this.separator = separator;
  return this;
}

WordCount_.prototype.getCountReport = function (rules) {
  var res = _.split(this.str, this.separator);
  return rules(_.groupBy(res, Function.call.bind(String.prototype.toLowerCase)));
}