# Google Apps Script snippets
This is a list of code fragments for the copy / paste tool on yours keyboard. I still don't know what to do about this. It would be great if you had an idea.

<!-- TOC depthFrom:2 -->

- [Base Services](#base-services)
  - [Logger](#logger)
    - [Pretty JSON in Logger](#pretty-json-in-logger)
- [Spreadsheets](#spreadsheets)
  - [Common elements for spreadsheets](#common-elements-for-spreadsheets)
    - [Round to day](#round-to-day)
  - [Sheets](#sheets)
    - [Get a sheet by index](#get-a-sheet-by-index)
    - [Get a sheet by name](#get-a-sheet-by-name)
    - [Get sheet by gid](#get-sheet-by-gid)
  - [Values and data](#values-and-data)
    - [Append values to a sheet](#append-values-to-a-sheet)
- [License](#license)

<!-- /TOC -->

## Base Services

### Logger

#### Pretty JSON in Logger
_example [/issues/3](../../issues/3)_
```js
function ll(){
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(typeof arguments[i] === 'object' ? JSON.stringify(arguments[i], null, ' ') : arguments[i]);
  }
  if(typeof args[0] === 'string' && !/%s/.test(args[0]))
    args.unshift(Array(args.length).join('\n%s'));
  Logger.log.apply(Logger, args);
}
```
## Spreadsheets

### Common elements for spreadsheets

#### Round to day

```js
// Rounds the date to days. Usefull for timestamps
function roundToDay_(date, offsetOfDays){
  offsetOfDays = offsetOfDays * 24 * 60 * 60 * 1000 || 0;
  var res_ = new Date(date.valueOf() + offsetOfDays);
  res_.setHours(0, 0, 0, 0);
  return res_;
}
```
### Sheets

#### Get a sheet by index

```js
/**
  Returns the sheet by index
  @param {number} index A positive integer
*/
var sheet = spreadsheet.getSheets()[index];
```

#### Get a sheet by name

```js
//Always returns a sheet
function getSheetByName(spreadsheet, sheetName){
  var sheet = spreadsheet.getSheetByName(sheetName);
  return sheet || spreadsheet.insertSheet(sheetName);
}
```

#### Get sheet by gid

```js
function getSheetByGid(spreadsheet, gid){
  gid = +gid || 0;
  var res_ = undefined;
  var sheets_ = spreadsheet.getSheets();
  for(var i = sheets_.length; i--; ){
    if(sheets_[i].getSheetId() === gid){
      res_ = sheets_[i];
      break;
    }
  }
  return res_;
}
```

### Values and data

#### Append values to a sheet
like [appendRow(rowContents)](https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow(Object))

```js
// Appends values to sheet
function appendValues(sheet, values, colOffset){
  colOffset = colOffset || 1;
  return sheet.getRange(
      sheet.getLastRow() + 1,
      colOffset,
      values.length, 
      values[0].length
    ).setValues(values);
}
```

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)