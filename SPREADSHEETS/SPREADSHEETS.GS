function getActiveData() {

  var activeSheet_ = SpreadsheetApp.getActiveSheet()
  var frozenRows = activeSheet_.getFrozenRows();
  var values_ = activeSheet_.getDataRange().getValues();
  var range_ = SpreadsheetApp.getActiveRange();

  if (frozenRows > 1)
    values_.splice(0, frozenRows - 1);

  var headers_ = values_.shift();

  var firstRow_ = range_.getRow() - 2 - frozenRows + 1;
  var lastRow_ = range_.getLastRow() - 2 - frozenRows + 1;

  if (!values_.length)
    return [];

  if (firstRow_ > values_.length)
    return [];

  firstRow_ = firstRow_ < 0 ? 0 : firstRow_;
  lastRow_ = lastRow_ >= values_.length ? (values_.length - 1) : lastRow_;

  var collection_ = [];

  for (var i = firstRow_; i <= lastRow_; i++) {
    var item = {
      row: i + 1
    };
    for (var j = 0; j < headers_.length; j++) {
      item[headers_[j]] = values_[i][j];
      item.col = j + 1;
    }
    collection_.push(item);
  }
  return collection_;
}