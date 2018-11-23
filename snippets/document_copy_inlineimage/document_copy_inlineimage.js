/* exported run, getBlobImageByIndexFromDoc_ */

/**
 * @param {string} from The ID of a Document with the inlineImage
 * @param {*} index The index of the inlineImage. Starts from 1
 */
function getBlobImageByIndexFromDoc_(from, index) {
  var template =
    'https://docs.google.com/feeds/download/documents/export/Export?id=%s&exportFormat=zip';
  var url = Utilities.formatString(template, from);
  var file = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    }
  }).getBlob();
  var patt = new RegExp(
    Utilities.formatString('images\\/image%s\\..{3}', index)
  );
  var blob = Utilities.unzip(file).find(function(b) {
    return patt.test(b.getName());
  });
  return blob;
}

/**
 * Runs the example
 * @ignore
 */
function run() {
  var blob = getBlobImageByIndex(
    '1_IyrjvBAK1c1hNcG0yYP41XFYmO7m_zOTfmwLktaCGY',
    1
  );
  var dest = DocumentApp.openById(
    '1h7_W36wN-9p2Msabj-ZBcHLGQWdX-QtB_YqBpsmrMp0'
  );
  dest.getBody().appendImage(blob);
}
