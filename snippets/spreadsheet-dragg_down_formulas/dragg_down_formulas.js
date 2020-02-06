/**
 * @file Dragg down a formula
 * @url https://qna.habr.com/q/709715
 * */

/**
 * User action. Runs the snippet
 */
function run() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const base = sheet.getRange('C3:C');
  const colFormula = sheet.getRange('J3');
  draggDownFormulas_(base, colFormula);
}

/**
 * @param {GoogleAppsScript.Spreadsheet.Range} base
 * @param {GoogleAppsScript.Spreadsheet.Range} colFormula
 */
function draggDownFormulas_(base, colFormula) {
  const baseValues = base.getValues();
  const lastBase =
    baseValues.length - baseValues.reverse().findIndex(row => row[0] !== '');
  const colFormulaFormula = colFormula.getFormula();
  colFormula
    .getSheet()
    .getRange(base.getRow(), colFormula.getColumn(), lastBase)
    .setFormula(colFormulaFormula);
}
