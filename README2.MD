```javascript
function roundToDay_(date){
  var res_ = new Date(date.valueOf());
  res_.setHours(0, 0, 0, 0);
  return res_;
}
```

### Sort a mixed array
http://stackoverflow.com/a/4340339/1393023
```javascript
function sortAlphaNum(a, b) {
  var aA = a.replace(/[^a-zA-Z]/g, "");
  var bA = b.replace(/[^a-zA-Z]/g, "");
  if (aA === bA) {
    var aN = parseInt(a.replace(/[^0-9]/g, ""), 10);
    var bN = parseInt(b.replace(/[^0-9]/g, ""), 10);
    return aN === bN ? 0 : aN > bN ? 1 : -1;
  } else {
    return aA > bA ? 1 : -1;
  }
}
```

### Sort a mixed array by columns
http://stackoverflow.com/a/4340339/1393023
```javascript
function sortAlphaNum(index, a, b) {
  var aA = a[index].replace(/[^a-zA-Z]/g, "");
  var bA = b[index].replace(/[^a-zA-Z]/g, "");
  if (aA === bA) {
    var aN = parseInt(a[index].replace(/[^0-9]/g, ""), 10);
    var bN = parseInt(b[index].replace(/[^0-9]/g, ""), 10);
    return aN === bN ? 0 : aN > bN ? 1 : -1;
  } else {
    return aA > bA ? 1 : -1;
  }
}

var data = res.list.sort(sortAlphaNum.bind(null, 0)).sort(sortAlphaNum.bind(null, 1));
```
