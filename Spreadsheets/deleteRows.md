# Removes rows from a sheet according to the condition

```js
/**
 *
 *
 *
 **/
function deleteRows_(sheet, condition){
  var values = sheet.getDataRange().getValues();
  values.unshift([]);
  values.reverse().forEach(function(){
    if(this.condition.apply(null, arguments)){
      this.isContinue++;
    } else if(this.isContinue) {
      var rowPosition = this.l - arguments[1];
      var howMany = this.isContinue;
      Logger.log("%s %s", rowPosition, howMany);
      this.sheet.deleteRows(rowPosition, howMany);
      this.isContinue = 0;
    }
  }, {sheet: sheet, condition: condition, isContinue: 0, l: values.length});
}
```

## Examples
###  Removes rows if cells in D28:D77 and F28:F77 are empty together by a row

```js
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  deleteRows_(sheet, function(row, i){
    Logger.log("%s %s %s", i, 28 <= i && i <= 77, row[3]);
    return 28 <= i && i <= 77 && !row[3] && !row[5];
  });
}
```