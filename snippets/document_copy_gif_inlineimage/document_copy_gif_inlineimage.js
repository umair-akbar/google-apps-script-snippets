function myFunction() {
  //  var doc = DocumentApp.openById('1pSi4SXrkJSY5Nta7CKTjN9pDlwpMJkOXDdmCOTFKPPI');
  //  var image = doc.getBody().getImages()[0].getBlob();
  //  image.setName('ff');
  // //  var file = Utilities.newBlob(image, contentType, name)
  //  DriveApp.createFile(image);
  // //  var dest = DocumentApp.openById('1h7_W36wN-9p2Msabj-ZBcHLGQWdX-QtB_YqBpsmrMp0');
  // //  dest.getBody().appendImage(image);
  //  console.log(JSON.stringify(Drive.Files.get('1pSi4SXrkJSY5Nta7CKTjN9pDlwpMJkOXDdmCOTFKPPI').exportLinks, null, ' '));
  var url =
    'https://docs.google.com/feeds/download/documents/export/Export?id=1pSi4SXrkJSY5Nta7CKTjN9pDlwpMJkOXDdmCOTFKPPI&exportFormat=zip';
  var file = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    }
  }).getBlob();
  //  file.setName('ddd');
  //  DriveApp.createFile(file);
  var blob = Utilities.unzip(file).find(function(b) {
    return /images\/image1\..{3}/.test(b.getName());
  });
  var dest = DocumentApp.openById(
    '1h7_W36wN-9p2Msabj-ZBcHLGQWdX-QtB_YqBpsmrMp0'
  );
  dest.getBody().appendImage(blob);
}

function getBlobImageByIndex() {}
