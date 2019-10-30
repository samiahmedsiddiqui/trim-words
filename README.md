# trim-words

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][dependency-image]][dependency-url]

Trims text to a certain number of words.

## Install

Via `npm`
```
npm install trim-words
```

Via Yarn
```
yarn add trim-words
```

## Usage

Import Package in `Node.js`.

```
var trimWords = require('trim-words');
```

Import Package in `React`.

```
import trimWords from 'trim-words';
```

## Example

### Trims text to a certain number of words in `Node.js`. 

```
var trimWords = require('trim-words');

var text = '<h1>What is Geostatistics?</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere ut. Maecenas in mi enim. Quisque maximus enim nunc.</p> <p>Donec eu ultricies ipsum. Fusce eget pellentesque urna. Vestibulum lacinia laoreet mi nec posuere. Duis vel elit elementum, scelerisque eros a, sodales eros. Praesent hendrerit neque velit, nec pretium ipsum finibus facilisis. Proin ultricies sem in sapien consectetur dictum.</p>';

var trimmedText = trimWords(text, 80, '...');

console.log('Trimmed Text is: ', trimmedText);
```

### Trims text to a certain number of words in `React`. 

```
import trimWords from 'trim-words';

var text = '<h1>What is Geostatistics?</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere ut. Maecenas in mi enim. Quisque maximus enim nunc.</p> <p>Donec eu ultricies ipsum. Fusce eget pellentesque urna. Vestibulum lacinia laoreet mi nec posuere. Duis vel elit elementum, scelerisque eros a, sodales eros. Praesent hendrerit neque velit, nec pretium ipsum finibus facilisis. Proin ultricies sem in sapien consectetur dictum.</p>';

var trimmedText = trimWords(text, 80, '...');

console.log('Trimmed Text is: ', trimmedText);
```

## Parameters

| Attributes | Type | Required | Description |
| ----------- | ----- | ----------- | ------------- |
| text | String | Yes | Text to trim. |
| numWords | String | No | Number of words.<br><br> Default value is `55`. |
| more | String | No | What to append if `text` needs to be trimmed.<br><br> Default `…` |

## Return

Trimmed text.

## Tested

This package is tested with the `Node.js` and `React` Application. 

[npm-image]: https://img.shields.io/npm/v/trim-words.svg
[npm-url]: https://www.npmjs.com/package/trim-words
[downloads-image]: https://img.shields.io/npm/dm/trim-words.svg

[travis-image]: https://img.shields.io/travis/com/samiahmedsiddiqui/trim-words.svg
[travis-url]: https://travis-ci.com/samiahmedsiddiqui/trim-words

[dependency-image]: https://img.shields.io/david/samiahmedsiddiqui/trim-words.svg
[dependency-url]: https://david-dm.org/samiahmedsiddiqui/trim-words
