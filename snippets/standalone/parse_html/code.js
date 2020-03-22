/**
 *
 */
function run() {
  const httpResponse = fetch_('https://t.me/googleappsscriptrc');
  const contentText = httpResponse.getContentText();
  const rules = [
    {
      patt: /<img class="tgme_page_photo_image" src="(.*?)">/,
      placeholder: '$1',
    },
    {
      patt: /<div class="tgme_page_title" dir="auto">(.*?)</,
      placeholder: '$1',
    },
    {
      patt: /<div class="tgme_page_extra">(.*?),?(.*?)</,
      placeholder: '$1, $2',
    },
    {
      patt: /<div class="tgme_page_description" dir="auto">(.*?)<\/div>/,
      placeholder: '$1',
    },
  ];
  const content = contentText.replace(/[\r\n]/g, ' ').replace(/\s+/, ' ');
  const extractions = extractText_(rules, content);

  const keys = ['image', 'title', 'users', 'description'];
  console.log(
    extractions.reduce((res, extraction, i) => {
      if (keys[i]) res[keys[i]] = extraction.output;
      return res;
    }, {})
  );
}

/**
 *
 * @param {*} url
 */
function fetch_(url) {
  return UrlFetchApp.fetch(url);
}

/**
 * 
 * @typedef {{
     patt: RegExp,
     placeholder: string
   }} Rule
 */

/**
 *
 * @param {Array.<Rule>} rules
 * @param {string} content
 */
function extractText_(rules, content) {
  let currentContent = content;
  return rules.map(rule => {
    const res = { data: [] };
    const regExpExecArray = rule.patt.exec(currentContent);
    if (regExpExecArray) {
      currentContent = currentContent.slice(regExpExecArray.index);
      res.data = [...regExpExecArray];
      if (rule.placeholder)
        res.output = rule.placeholder.replace(
          /\$(\d+)/g,
          (_, i) => res.data[i]
        );
    }
    return res;
  });
}
