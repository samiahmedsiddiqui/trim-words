import trimPhp from 'trim-php';

/**
 * Trims text to a certain number of words.
 * @param text The string that will be trimmed to certain number of words.
 * @param numWords Number of words.
 * @param more What to append if `text` needs to be trimmed.
 * @returns Trimmed text.
 */
function trimWords(text: string, numWords: number, more: string): string {
  const sep = ' ';
  let wordsArray = [];

  if (!numWords) {
    numWords = 55;
  }

  if (!more) {
    more = '&hellip;';
  }

  // strip script and style tags with its content
  text = text.replace(/<(script|style)([\S\s]*?)>([\S\s]*?)<\/(script|style)>/ig, '');
  // strip all the other HTML tags
  text = text.replace(/(<([^>]+)>)/ig, '');
  text = new trimPhp().trim(text);

  wordsArray = text.split(/[\n\r\t ]+/, numWords + 1);
  if (wordsArray.length > numWords) {
    wordsArray.pop();
    text = wordsArray.join(sep);
    text = text + more;
  } else {
    text = wordsArray.join(sep);
  }

  return text;
}

exports.default = trimWords;
