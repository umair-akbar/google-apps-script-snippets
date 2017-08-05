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

## Spreadsheet (Class)
### getWorkSpreadsheet
Basic settings workflow
```javascript
function getWorkSpreadsheet() {
  var spreadsheet, spreadsheetId = getUserProperties().spreadsheetId;
  try {
    spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  } catch (err) {
    spreadsheet = SpreadsheetApp.create('.appsheet');
    setUserProperties({
      spreadsheetId: spreadsheet.getId()
    });
  }
  return {
    spreadsheetId: spreadsheetId,
    name: spreadsheet.getName()
  }
}

function getUserProperties() {
  return PropertiesService.getUserProperties().getProperties();
}

function setUserProperties(properties) {
  PropertiesService.getUserProperties().setProperties(properties);
}
```
### getSheetByName(spreadsheet, sheetName)
Always returns a sheet
```javascript
function getSheetByName(spreadsheet, sheetName){
  var sheet = spreadsheet.getSheetByName(sheetName);
  return sheet || spreadsheet.insertSheet(sheetName);
}
```
### getSheetByIndex(spreadsheet, index, name)
Always returns a sheet
```javascript
function getSheetByIndex(spreadsheet, index){
  var sheet = spreadsheet.getSheets()[index];
  return sheet || spreadsheet.insertSheet();
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
  var gid = '792071603';
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var uidsMap = sheets.reduce(function(p,c,i){p[c.getSheetId()]=i;return p;},{});
  var sheet = sheets[uidsMap[gid]];
  sheet.getRange(sheet.getLastRow(), 1).activate();
}
```
### setValuesToSheet(sheet, values, row, column)
```javascript
function setValuesToSheet(sheet, values, row, column){
  row = row || 1;
  column = column || 1;
  return sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}
```
## Spreradsheet (Arrays)
### mapSheetHeaders(headers)
Map headers of a 2d array
```javascript
function mapSheetHeaders(headers) {
  var map = headers.reduce(function(pV, cV, i){
    pV[cV] = i;
    return pV;
  }, {});
  return map;
}
```
### Example
```javascript
var values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
var headers = mapSheetHeaders(values.shift());
```
## DriveApp
### moveFileToFolder(file, folder, stayRoot)
Move file to folder
```javascript
function moveFileToFolder(file, folder, stayRoot){
  folder.addFile(file);
  if(stayRoot !== true)
    DriveApp.getRootFolder().removeFile(file);
  return file;
}
```
### Example
```javascript
var folderId = '6630c884839571e483ed';
var folder = DriveApp.getFolderById(folderId);
var fileID = 'a8a398e30e79d0cc59a8';
var file = DriveApp.getFileById(fileID);
moveFileToFolder(file, folder);
```
## Extends and override
### Short `Utilities.formatDate`
```javascript
function ufd_() {
  return Utilities.formatDate.apply(Utilities, arguments);
}
```
### Short `Utilities.formatString`
```javascript
function ufs_() {
  return Utilities.formatString.apply(Utilities, arguments);
}
```
### getArray(length, defaultValue)
Initialize an array with length and default values
```javascript
function getArray(length, defaultValue){
  return Array.apply(null, Array(length)).map(function () {return this;}, defaultValue);
}
```
### Example
```javascript
  var arr = getArray(5, '');
  //['', '', '', '', '']
```
## Pretty JSON in Logger
```javascript
  function ll(){
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(typeof arguments[i] === 'object' ? JSON.stringify(arguments[i], null, ' ') : arguments[i]);
    }
    Logger.log.apply(Logger, args);
  }
```