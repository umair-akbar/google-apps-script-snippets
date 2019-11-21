/**
 *
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('My tools')
    .addItem('Create/open', 'userActionCreateOpen')
    .addToUi();
}

/**
 *
 */
function userActionCreateOpen() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = SpreadsheetApp.getActiveRange();
  if (range.getRow() !== range.getLastRow())
    throw new Error('U have to select one row');

  var data = sheet
    .getRange(Utilities.formatString('%s:%s', range.getRow(), range.getRow()))
    .getValues()[0];
  if (!data[0]) throw new Error("UID can't be empty");
  if (data[6]) openFile_(data[6]);
  var id = createFile_(data);
  sheet.getRange(range.getRow(), 7).setValue(id);
  openFile_(id);
}

/**
 *
 * @param {Array.<object>} data
 */
function createFile_(data) {
  var templateId = '1Tm8glH1b19S_x6yQo-9K6X9P5sHqhO7b8CAEjoB1PZY';
  var destination = DriveApp.getFolderById('1X95lU7Emerhag8eyLwy5UtZc8Xn12MbI');
  var file = DriveApp.getFileById(templateId).makeCopy(data[0], destination);
  return file.getId();
}

/**
 *
 */
function openFile_(id) {
  var tmp = HtmlService.createTemplateFromFile('index');
  tmp.url = Utilities.formatString(
    'https://docs.google.com/document/d/%s/edit?usp=sharing',
    id
  );
  var htmlOutput = tmp.evaluate();
  SpreadsheetApp.getUi().showModelessDialog(htmlOutput, 'title');
}
