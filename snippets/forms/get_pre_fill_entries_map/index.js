/**
 * @file
 * [Get Entry ID which is used to pre-populate fields]{@link https://stackoverflow.com/questions/46017170}
 */

/**
 * Prefilled entry
 * @typedef {Object} PrefilledEntry
 * @property {GoogleAppsScript.Forms.Item} item
 * @property {string} entry
 */

/**
 * Prefilled entries map
 * @typedef {Object} PrefilledEntriesMap
 * @property {string} prefilledUrl
 * @property {Array.<PrefilledEntry>} entries
 */

/**
 * Run the snippet
 */
function run() {
  const form = FormApp.openById('1TQ4B3d4-be8LUu1l2KJAYfL0ZYgB1f5YcS5SfjdHYOE');
  const prefilledEntriesMap = getPreFillEntriesMap_(form);
  console.log('prefilledUrl', prefilledEntriesMap.prefilledUrl);
  console.log('entries', prefilledEntriesMap.entries);
}

/**
 *
 * @param {GoogleAppsScript.Forms.Form} form
 * @return {PrefilledEntriesMap}
 */
function getPreFillEntriesMap_(form) {
  const items = form.getItems();
  const formResponse = form.createResponse();
  const entries = items.reduce((p, item) => {
    const response = getDefaultItemResponse_(item);
    if (response) {
      formResponse.withItemResponse(response);
      p.push({
        entry: undefined,
        item: item,
      });
    }
    return p;
  }, []);

  const prefilledUrl = formResponse.toPrefilledUrl();

  var params = prefilledUrl
    .split('&entry.')
    .map(str => str.split('=')[0])
    .slice(1);

  return {
    prefilledUrl: prefilledUrl,
    entries: entries.map((item, i) => {
      item.entry = params[i];
      return item;
    }),
  };
}

/**
 *
 * @param {GoogleAppsScript.Forms.Item} item
 */
function getDefaultItemResponse_(item) {
  switch (item.getType()) {
    case FormApp.ItemType.TEXT:
      return item.asTextItem().createResponse('1');
    case FormApp.ItemType.PARAGRAPH_TEXT:
      return item.asParagraphTextItem().createResponse('-');
    case FormApp.ItemType.MULTIPLE_CHOICE:
      return item.asMultipleChoiceItem().createResponse(
        item
          .asMultipleChoiceItem()
          .getChoices()[0]
          .getValue()
      );
    case FormApp.ItemType.CHECKBOX:
      return item.asCheckboxItem().createResponse([
        item
          .asCheckboxItem()
          .getChoices()[0]
          .getValue(),
      ]);
    case FormApp.ItemType.LIST:
      return item.asListItem().createResponse(
        item
          .asListItem()
          .getChoices()[0]
          .getValue()
      );
    case FormApp.ItemType.SCALE:
      return item
        .asScaleItem()
        .createResponse(item.asScaleItem().getLowerBound());
    default:
      return undefined;
  }
}
