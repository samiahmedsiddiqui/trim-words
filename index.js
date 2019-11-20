'use strict';

var phpTrim = require('trim-php');

function trimWords(text, numWords, more) {
  if (!numWords) {
    numWords = 55;
  }
  if (!more) {
    more = '&hellip;';
  }

  // StripTags
  text = text.replace(/<(script|style)[^>]*?>.*?<\/\\1>/si, '');
  text = text.replace(/<[^>]*>/g, '');
  text = phpTrim.trimPhp(text);

  var wordsArray = text.split(/[\n\r\t ]+/, numWords + 1);
  var sep = ' ';

  if (wordsArray.length > numWords) {
    wordsArray.pop();
    text = wordsArray.join(sep);
    text = text + more;
  } else {
    text = wordsArray.join(sep);
  }

  return text;
}

module.exports = trimWords;
