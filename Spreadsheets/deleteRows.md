# Removes rows from a sheet according to the condition

```js
/**
* Removes rows from a sheet according to the condition
*
* @function
* @name deleteRows_
* @param {Sheet} sheet - Represents the Sheet that is changing.
* @param {conditionCallback} condition - The callback that should return true/false state for each row.
**/
function deleteRows_(sheet, condition){
  var values = sheet.getDataRange().getValues();
  values.unshift([]);
  values.reverse().forEach(function(){
    var i = this.l - arguments[1];
    if(this.condition.apply(null, [arguments[0], i, arguments[2]])){
      this.isContinue++;
    } else if(this.isContinue) {
      this.sheet.deleteRows(i, this.isContinue);
      this.isContinue = 0;
    }
  }, {sheet: sheet, condition: condition, isContinue: 0, l: values.length});
  
}

/**
* Returns true/false state for each row.
*
* @callback conditionCallback
* @param {Array} currentValue - The current row of the DataRange
* @param {Number} index - The index of the current row. The DataRange is reversed!
* @param {Array} array - The DataRange. The DataRange is reversed!
**/

## Examples
###  Removes rows if cells in D28:D77 and F28:F77 are empty together by a row

```js
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  deleteRows_(sheet, function(row, i){
    return 28 <= i && i <= 77 && !row[3] && !row[5];
  });
}
```