# Crumbs

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