function doGet() {
  return HtmlService.createTemplateFromFile('app')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function createForm() {
  var form = FormApp.openById('1borqD3lqYtp9FgSwBBYuq6Sa2PZ2GYlorkLKYoxEU-c');
  removeAllFields(form);
}

/**
 * @param {GoogleAppsScript.Forms.Form} form
 */
function removeAllFields(form) {
  var items = form.getItems();
  while (items.length > 0) {
    form.deleteItem(items.pop());
  }
}

/**
 *
 * @param {GoogleAppsScript.Forms.Form} form
 * @param {object} item
 */
function addTextItem(form, item) {
  var ta = form.addTextItem();
  ta.setTitle('Title');
}
