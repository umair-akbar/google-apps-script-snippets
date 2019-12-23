/**
 * Format active range
 */
function runFormatActiveRange() {
  var range = SpreadsheetApp.getActiveRange();
  applyFormat_(range);
}

/**
 * Format active sheet
 */
function runFormatActiveSheet() {
  var range = SpreadsheetApp.getActiveSheet().getDataRange();
  applyFormat_(range);
}

/**
 * Format active range
 */
function runFormatActiveSpreadsheet() {
  SpreadsheetApp.getActive()
    .getSheets()
    .forEach(function(sheet) {
      applyFormat_(sheet.getDataRange());
    });
}

/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} range
 */
function applyFormat_(range) {
  range.setVerticalAlignment('middle').setFontFamily('Calibri');
}
