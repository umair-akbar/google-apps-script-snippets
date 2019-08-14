/**
 * @file Painting specific characters in cells
 * {@link https://support.google.com/docs/thread/11987044}
 */

/**
 * Runs the snippet
 */
function run() {
  var range = SpreadsheetApp.getActiveRange();
  var char = '|';
  var color = 'red';
  paintingSpecificCharacters_(range, char, color);
}

/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} range
 * @param {string} char
 * @param {string} color
 */
function paintingSpecificCharacters_(range, char, color) {
  var textStyleBuilder = SpreadsheetApp.newTextStyle();
  textStyleBuilder.setForegroundColor(color);
  var textStyle = textStyleBuilder.build();
  var length = char.length;
  var values = range.getValues().map(function(row) {
    return row.map(function(value) {
      var richTextBuilder = SpreadsheetApp.newRichTextValue();
      richTextBuilder.setText(value);
      var indexOf = value.indexOf(char);
      while (indexOf > -1) {
        richTextBuilder.setTextStyle(indexOf, indexOf + length, textStyle);
        indexOf = value.indexOf(char, indexOf + length);
      }
      return richTextBuilder.build();
    });
  });

  range.setRichTextValues(values);
}
