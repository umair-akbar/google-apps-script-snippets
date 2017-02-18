# Google Apps Script Snippets
## Gists
- [The Modal Dialog][1] works longer than the Prompt.
- [Visibility Browser API][2] for sidebars & add-ons
- [Set content to file, get content from file][3]
- [Sort Active Range][4] of Spreadsheet

[1]: https://gist.github.com/oshliaer/9d9dd61ccebf4ea0070c
[2]: https://gist.github.com/oshliaer/4c3c926ab0a5bc9630fb
[3]: https://gist.github.com/oshliaer/25d4fca21e8745df4de9
[4]: https://gist.github.com/oshliaer/0801f151fb57a4bee7f2

## Spreadsheet
### getSheetByName(spreadsheet, sheetName)
Always returns a sheet
```javascript
function getSheetByName(spreadsheet, sheetName){
  var sheet = spreadsheet.getSheetByName(sheetName);
  return sheet || spreadsheet.insertSheet(sheetName);
}
```
#### Example
```javascript
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var settingsSheet = getSheetByName(spreadsheet, 'Settings');
```
### cropSheetBySize(sheet, leftRows, topCols)
Prettify the given sheet cropping it
```javascript
function cropSheetBySize(sheet, leftRows, topCols){
  (leftRows && sheet.getMaxRows() > leftRows) &&
    sheet.deleteRows(leftRows + 1, sheet.getMaxRows() - leftRows);
  (topCols && sheet.getMaxColumns() > topCols) &&
    sheet.deleteColumns(topCols + 1, sheet.getMaxColumns() - topCols);
  return sheet;
}
```
#### Example
```javascript
  cropSheetBySize(sheet, 2, 3);
```
### cropSheetByData(sheet)
Prettify the given sheet cropping it
```javascript
function cropSheetByData(sheet){
  return cropSheetBySize(sheet, sheet.getLastRow(), sheet.getLastColumn());
}
```
#### Example
```javascript
 sheet.clearContents().getRange(2, 1, values.length, values[0].length).setValues(values);
 cropSheetByData(sheet);
```
### flushAndSleep(milliseconds)
Give your tables to cool down. Don't use with loops
```javascript
function flushAndSleep(milliseconds){
  SpreadsheetApp.flush();
  Utilities.sleep(milliseconds || 100);
}
```
### onOpen() Move to last cell in specific worksheet [Simple]
```javascript
  var name = 'Sheet1';
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  sheet.getRange(sheet.getLastRow(), 1).activate();
```
### onOpen() Move to last cell in specific worksheet [Advanced]
```javascript
function onOpen(){
  var uid = '792071603';
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var uidsMap = sheets.reduce(function(p,c,i){p[c.getSheetId()]=i;return p;},{});
  var sheet = sheets[uidsMap[uid]];
  sheet.getRange(sheet.getLastRow(), 1).activate();
}
```
