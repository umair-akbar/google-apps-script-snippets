/**
 * @file
 * @see
 * {@link https://t.me/googleappsscriptrc}
 */

/**
 *
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('My tools')
    .addItem('Fill data', 'userActionFillData')
    .addToUi();
}

/**
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function onEdit(e) {
  if (
    e.range.getSheet().getName() === 'Sheet1' &&
    ((e.range.getColumn() === 2 && e.range.getRow() > 3) ||
      e.range.getA1Notation() === 'D3')
  )
    userActionFillData();
}
/**
 *
 */
function userActionFillData() {
  SpreadsheetApp.getActive().toast('Start ...');
  const percent =
    SpreadsheetApp.getActive()
      .getRange('Sheet1!D3')
      .getValue() || 0.1;
  const range = SpreadsheetApp.getActive().getRange('Sheet1!B3:C');
  const values = range.getValues();

  const totalData = values
    .map((_, i) => i)
    .filter((_, i) => values[i][0] !== '');

  const sortIndexes = totalData
    .sort(() => 0.5 - Math.random())
    .slice(0, parseInt(totalData.length * percent));

  const newValues = values.map((_, i) => [
    sortIndexes.indexOf(i) !== -1 ? true : '',
  ]);

  SpreadsheetApp.getActive()
    .getRange('Sheet1!C3:C')
    .setValues(newValues);
}
