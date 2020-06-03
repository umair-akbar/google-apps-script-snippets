/* exported ImportxmlScrapper */
/**
 *
 */
class ImportxmlScrapper {
  /**
   * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} book
   */
  constructor(book) {
    this.book = book;
    this.data = this.book.getSheetByName('Data');
    this.inproc = this.book
      .getSheets()
      .find((sheet) => /\[inproc\]/i.test(sheet.getName()));
  }
  /**
   *
   */
  init() {
    const sheet = this.data.copyTo(this.book);
    sheet
      .createTextFinder('(.*IMPORTXML.*)')
      .useRegularExpression(true)
      .matchFormulaText(true)
      .replaceAllWith('_$1');
    sheet.setName(`[inproc] ${sheet.getName()}`);
  }
  /**
   *
   */
  scrape({ counter = 50 }) {
    let _counter_ = counter;
    const current = this.book
      .getSheets()
      .find((sheet) => /\[inproc\]/i.test(sheet.getName()));

    if (!current) return;

    const substFinder = current
      .createTextFinder('^_=')
      .useRegularExpression(true);
    while (substFinder.findNext() && --_counter_) substFinder.replaceWith('=');
    SpreadsheetApp.flush();

    const dr = current.getDataRange();
    dr.setValues(dr.getValues());
  }
}
