/**
 * Inserts the rich text to the cell.
 * @returns {undefined}
 */

/* exported insertRichTextToActiveCell */

function insertRichTextToActiveCell() {
  var range = SpreadsheetApp.getActive().getRange('Лист!A1');
  range.clearFormat();
  range.setFontSize(18);

  var textStyleBuilder = SpreadsheetApp.newTextStyle();
  textStyleBuilder.setForegroundColor('red');
  var textStyle = textStyleBuilder.build();

  var richTextBuilder = SpreadsheetApp.newRichTextValue();
  richTextBuilder.setText('Форматирование текста в ячейке. RichText');
  richTextBuilder.setTextStyle(textStyle);
  var value = richTextBuilder.build();

  range.setRichTextValue(value);
}
