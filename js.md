```javascript
  function roundToDay_(date){
    var res_ = new Date(date.valueOf());
    res_.setHours(0, 0, 0, 0);
    return res_;
  }
  ```
