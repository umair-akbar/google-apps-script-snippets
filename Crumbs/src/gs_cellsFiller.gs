function getFiller() {
  return new Filler_();
}

function Filler_() {

}

Filler_.prototype.fillRangeByCells = function (range, identity) {

  var formulas = range.getFormulas();
  var values = range.getValues();
  var res = _.map(values, function (row, r_) {
    var selfR = this;
    selfR.r = r_;
    return _.map(row, function (cell, c_) {
      var selfC = this;
      selfC.c = c_;
      return identity(selfC);
      // run each object through the constructor
    }.bind(selfR));
  }.bind({
    formulas: formulas,
    values: values
  }));

  range.setValues(res);

  return this;
}
