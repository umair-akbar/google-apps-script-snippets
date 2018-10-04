/* exported run */

/**
 * Runs the example
 * @ignore
 */
function run() {
  var sheet = SpreadsheetApp.getActiveSheet();
  deleteRowsByConditional_(sheet, function(row) {
    return row[1] === 10;
  });
}

/**
 * Removes rows from a sheet according to the condition
 *
 * @function
 * @name deleteRowsByConditional_
 * @example
 * // Removes all rows where B column contains 10
 * deleteRowsByConditional_(SpreadsheetApp.getActiveSheet(),
 *   function(currentValue){
 *     return currentValue[1] === 10;
 *   }
 * );
 *
 * @param {Sheet} sheet - Represents the Sheet that is changing.
 * @param {conditionCallback} condition - The callback that should return true/false state for each row.
 **/
function deleteRowsByConditional_(sheet, condition) {
  var values = sheet.getDataRange().getValues();
  values.unshift([]);
  values.reverse().forEach(
    function() {
      var i = this.l - arguments[1];
      if (this.condition.apply(null, [arguments[0], i, arguments[2]])) {
        this.isContinue++;
      } else if (this.isContinue) {
        this.sheet.deleteRows(i, this.isContinue);
        this.isContinue = 0;
      }
    },
    { sheet: sheet, condition: condition, isContinue: 0, l: values.length }
  );
}

/**
 * Returns true/false state for each row.
 *
 * @callback conditionCallback
 * @param {Array} currentValue - The current row of the DataRange
 * @param {Number} index - The index of the current row. The DataRange is reversed!
 * @param {Array} array - The DataRange. The DataRange is reversed!
 **/
