/* global ImportxmlScrapper */

/**
 *
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('IMPORTXML-SCRAPPER')
    .addItem('Init', 'userActionInit')
    .addItem('Scrape', 'userActionScrape')
    .addToUi();
}

/**
 *
 */
function userActionInit() {
  new ImportxmlScrapper(SpreadsheetApp.getActive()).init();
}

/**
 *
 */
function userActionScrape() {
  new ImportxmlScrapper(SpreadsheetApp.getActive()).scrape({});
}
