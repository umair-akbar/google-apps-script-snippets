function getDocumentsService() {
  return new Documents_();
}

function Documents_() {
  this.files = [];
  this.getIterator = function () {
    var files = this.files;
    var nextIndex = 0;
    Logger.log(nextIndex);

    return {
      next: function () {
        return nextIndex < files.length ?
          { file: files[nextIndex++], done: false } :
          { file: undefined, done: true };
      }
    };
  }
}

Documents_.prototype.addDocument = function (document) {
  this.files.push(document);
  return this;
}

Documents_.prototype.addDocumentById = function (id) {
  var document = DocumentApp.openById(id);
  this.files.push(document);
  return this;
}

Documents_.prototype.replaceText = function (searchPattern, replacement) {
  var it = this.getIterator();
  var f = it.next();
  while (!f.done) {
    f.file.replaceText(searchPattern, replacement);
    f = it.next();
  }
  return this;
}

Documents_.prototype.saveAndClose = function () {
  var it = this.getIterator();
  var f = it.next();
  while (!f.done) {
    f.file.saveAndClose();
    f = it.next();
  }

  this.files = [];
  return this;

}
