function doGet(e) {
  return HtmlService.createTemplateFromFile('app').evaluate().setTitle('Protect');
}

function protectRange(args){
  var id = args.id,
      a1Notation = args.a1Notation;
  var ss = SpreadsheetApp.openById(id);
  var range = ss.getRange(a1Notation);  
  var protection = range.protect().setDescription('AUTO_' + (new Date()).getTime());
  protection.removeEditors(protection.getEditors());
  if (protection.canDomainEdit()) {
    protection.setDomainEdit(false);
  }
}