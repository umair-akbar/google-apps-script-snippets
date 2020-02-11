/**
 * @file Удаляет цепочки навсегда
 * @url https://support.google.com/mail/thread/28210414?hl=ru
 */

const SPAMMEREMAIL = 'rt.ru';

/**
 *
 */
function trigger() {
  if (SPAMMEREMAIL.length < 3)
    throw new Error('Danger of deleting all content!');

  Gmail.Users.Threads.list('me', {
    q: `(from:${SPAMMEREMAIL})`,
  }).threads.forEach(thread => Gmail.Users.Threads.remove('me', thread.id));

  Gmail.Users.Threads.list('me', {
    q: `(from:${SPAMMEREMAIL}) is:trash`,
  }).threads.forEach(thread => Gmail.Users.Threads.remove('me', thread.id));
}
