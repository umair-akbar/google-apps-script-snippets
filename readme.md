# Google Apps Script snippets
This is a list of code fragments for the copy / paste tool on yours keyboard. I still don't know what to do about this. It would be great if you had an idea.

## Contents
* [Spreadsheets](#Spreadsheets)
  * [Common elements for spreadsheets]()
    * [Round to day]()
  * [Values and data]()
    * [Append values to a sheet]()

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

### Values and data

#### Append values to a sheet
like [appendRow(rowContents)](https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow(Object))

```js
// Appends values to sheet
function appendValues(sheet, values, colOffset){
  colOffset = colOffset || 1;
  return sheet.getRange(sheet.getLastRow() + 1, colOffset, values.length, values[0].length).setValues(values);
}
```

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)