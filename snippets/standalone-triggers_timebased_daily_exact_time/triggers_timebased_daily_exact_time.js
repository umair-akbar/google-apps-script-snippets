/**
 * @file The URLSearchParams constructor
 * @url https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 */

/**
 *
 */
function runOnce() {
  trigger_();
}

/**
 *
 */
function trigger_() {
  try {
    triggerAction();
  } catch (error) {
    console.error(error.message, error);
  } finally {
    var hours = 10;
    var minutes = 17;
    var seconds = 56;
    var now = new Date();
    var nextTime = new Date();
    nextTime.setHours(0, 0, 24 * 3600 + hours * 3600 + minutes * 60 + seconds);
    var delta = nextTime.getTime() - now.getTime();
    ScriptApp.newTrigger('trigger_')
      .timeBased()
      .after(delta)
      .create();
  }
}

/**
 *
 */
function triggerAction() {
  console.log("I'm fine");
}
