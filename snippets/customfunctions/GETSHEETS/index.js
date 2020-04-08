/**
 * @file
 * @see
 * {@link https://support.google.com/docs/thread/38580496}
 */

/*
Generate TOC
 =ARRAYFORMULA(HYPERLINK(
  "#gid="&GETSHEETS("SheetId",A1)
  ,GETSHEETS("Name",A1)
))

*/

/**
 * Custom formula
 */
function GETSHEETS(cmd) {
  return SpreadsheetApp.getActive()
    .getSheets()
    .map(sheet => [sheet[`get${cmd}`]()]);
}
