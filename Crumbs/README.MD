# Crumbs

1qWPflFZ7ymFc7Zu4mUkoDIjJyWo3ewCrkw-kFqzr7UWEYGCdVKMTYhJq

## wordCountService()

Calculates word counts in the string.

https://docs.google.com/spreadsheets/d/1z37RCcgXJOxVQsABsqrb4JMVfJL8oATaKHlIdt93e68/edit?usp=sharing

```javascript
function WORDCOUNT(string){
  return Crumbs.wordCountService().setString(string).getCountReport(rules_);
}

function rules_(obj){
  var res = [];
  for(var i in obj){
    if(i.length > 1)
      res.push([i, obj[i].length]);
  }
  return res.sort(sort_);
}

function sort_(a, b){
  if (a[1] === b[1]) {
    return a[0] <= b[0] ? -1: 1;
  }
  else {
    return (a[1] > b[1]) ? -1 : 1;
  }
}
```

## Documents Service

Replace two and more spaces from the given docs

```js
function myFunction() {
  Crumbs.getDocumentsService()
  .addDocumentById('793ff6027d273a1e0115059a00260e8612d73098')
  .addDocumentById('8f124d0e4668b6f38001d80f0149c9758f6c2d43')
  .replaceText('[\t\n\f\r ]{2,}', ' ')
  .saveAndClose();
}
```

## Cells Resizer

Resize the cells of the sheet by a map

```js
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var directions = {
    vertical: [5, 70, 15, 40],
    horizontal: [10, 150]
  };

  var cr = Crumbs.getCellsResizer(sheet);
  cr.setMaxColumns(15)
  .setMaxRows(15)
  .resize(directions)
  .cropSheetBySize()
  .flush();
}
```
