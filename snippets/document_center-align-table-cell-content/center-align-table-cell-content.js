/**
 * @file Center align table cell content
 * @url https://webapps.stackexchange.com/questions/133249
 */

/**
 * Run the snippet
 */
function run() {
  var doc = DocumentApp.getActiveDocument();
  setСenterAlignmentForAllTables_(doc);
}

/**
 *
 * @param {GoogleAppsScript.Document.Document} doc
 */
function setСenterAlignmentForAllTables_(doc) {
  var style = {};
  style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.CENTER;
  style[DocumentApp.Attribute.VERTICAL_ALIGNMENT] =
    DocumentApp.VerticalAlignment.CENTER;
  var tables = doc.getBody().getTables();
  tables.forEach(function(table) {
    var numRows = table.getNumRows();
    var indexRow = 0;
    while (indexRow < numRows) {
      var row = table.getRow(indexRow);
      var numCells = row.getNumCells();
      var indexCell = 0;
      while (indexCell < numCells) {
        var cell = row.getCell(indexCell);
        cell.setAttributes(style);
        indexCell++;
      }
      indexRow++;
    }
  });
}
