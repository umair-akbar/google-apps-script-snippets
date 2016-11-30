var PROP = getProperties();

function doGet(){
  var hs = HtmlService.createTemplateFromFile('#app');
  hs.prop = PROP;
  return hs.evaluate().setTitle('File-open dialog (Google File Picker)');
}

function getOAuthToken() {
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
}

function getProperties(){
  return PropertiesService.getScriptProperties().getProperties();
}