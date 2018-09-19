/* exported run */
/* global console */
/** @constant {string} FOLDER_ID The Folder ID */
var FOLDER_ID = '{{FOLDER_ID}}';

/** @constant {string} EMAIL The email */
var EMAIL = '{{EMAIL}}';

/**
 * Runs the example
 */
function run() {
  driveappChangeOwnerInFolder_(FOLDER_ID, EMAIL);
}

/**
 * Changes the owner for all files in a folder
 * @param {string} folderId The folder id
 * @param {string} newOwnerEmail The email
 * @returns {void}
 */
function driveappChangeOwnerInFolder_(filderId, newOwnerEmail) {
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    try {
      file.setOwner(newOwnerEmail);
    } catch (err) {
      /* eslint no-console: "off" */
      console.warn(err);
    }
  }
}
