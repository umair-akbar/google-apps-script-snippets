/* exported SPREADSHEET_ID, EDITOR_EMAIL, run */
/* global Drive */

/** @constant {string} FILE_ID The File ID */
var FILE_ID = '{{YOUR_FILE_ID}}';

/**
 * Runs the example
 * You must be a non-owner
 */
function run() {
  driveChangeMeRole_(FILE_ID);
}

/**
 * Downgrade you in the rights from the editor to the viewer
 * @param {string} fileId
 * @returns {void}
 */
function driveChangeMeRole_(fileId) {
  var me = Session.getActiveUser().getEmail();
  var permissionId = Drive.Permissions.getIdForEmail(me);
  var resource = Drive.newPermission();
  resource.role = 'reader';
  /* You can stay as a commenter
  resource.additionalRoles = ['commenter']; */
  Drive.Permissions.update(resource, fileId, permissionId.id);
}
