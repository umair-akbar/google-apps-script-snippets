function getCellsResizer(sheet) {
  return new CellsResizer_(sheet);
}

function CellsResizer_(sheet) {
  this.sheet = sheet;
  this.maxRows = 10;
  this.maxColumns = 10;
  return this;
}

CellsResizer_.prototype.setMaxRows = function (n) {
  this.maxRows = (n && n > 0 && n < 100) ? n : this.maxRows;
  Logger.log(this.maxRows);
  return this;
}

CellsResizer_.prototype.setMaxColumns = function (n) {
  this.maxColumns = (n && n > 0 && n < 100) ? n : this.maxColumns;
  // Logger.log(this.maxColumns);
  return this;
}

CellsResizer_.prototype.resizeRows = function (directions) {
  height = this.maxRows;
  var lastRow = this.sheet.getLastRow();
  if (lastRow < height)
    this.sheet.insertRows(1, height - lastRow + 1);
  var l = directions.vertical.length;
  for (var i = 0; i < height; i++) {
    this.sheet.setRowHeight(i + 1, directions.vertical[i % l]);
    Logger.log('%s %s %s', i, directions.vertical[i % l], this.sheet.getName());
  }
  return this;
}

CellsResizer_.prototype.resizeColumns = function (directions) {
  width = this.maxColumns;
  var lastColumn = this.sheet.getLastColumn();
  if (lastColumn < width)
    this.sheet.insertColumns(1, width - lastColumn + 2);
  var l = directions.horizontal.length;
  for (var i = 0; i < width; i++) {
    this.sheet.setColumnWidth(i + 1, directions.horizontal[i % l]);
    Logger.log(directions.horizontal[i % l]);
  }
  return this;
}

CellsResizer_.prototype.resize = function (directions, width, height) {
  this.resizeRows(directions).resizeColumns(directions);
  return this;
}

CellsResizer_.prototype.cropSheetBySize = function (leftRows, topCols) {
  var sheet = this.sheet;
  leftRows = leftRows || this.maxRows;
  topCols = topCols || this.maxColumns;
  (leftRows && sheet.getMaxRows() > leftRows) &&
    sheet.deleteRows(leftRows + 1, sheet.getMaxRows() - leftRows);
  (topCols && sheet.getMaxColumns() > topCols) &&
    sheet.deleteColumns(topCols + 1, sheet.getMaxColumns() - topCols);
  return this;
}

CellsResizer_.prototype.flush = function () {
  // Logger.log(this.maxRows);
  // Logger.log(this.maxColumns);
  SpreadsheetApp.flush();
  return this;
}