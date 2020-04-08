/**
 * @file
 * @see
 * {@link https://support.google.com/docs/thread/36708307}
 */

/**
 * Custom formula
 */
function GETSHEETS(cmd) {
  return SpreadsheetApp.getActive()
    .getSheets()
    .map(sheet => [sheet[`get${cmd}`]()]);
}
