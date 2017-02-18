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

### cropSheetByData(sheet)
Prettify the given sheet cropping it
```javascript
function cropSheetByData(sheet){
  (sheet.getMaxRows() - sheet.getLastRow()) && sheet.deleteRows(sheet.getLastRow() + 1, sheet.getMaxRows() - sheet.getLastRow());
  (sheet.getMaxColumns() - sheet.getLastColumn()) && sheet.deleteColumns(sheet.getLastColumn() + 1, sheet.getMaxColumns() - sheet.getLastColumn());
  return sheet;
}
```
#### Example
```javascript
 sheet.clearContents().getRange(2, 1, values.length, values[0].length).setValues(values);
 cropSheetByData(sheet);
```
