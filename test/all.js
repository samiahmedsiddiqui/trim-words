'use strict';

const assert = require('assert');
const trimWords = require('../index').default;

const text = `<h1>What




is Geostatistics?</h1 > <script>var a = 1; b = 2;</script><style>p { color: red; }</style><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere ut. Maecenas in mi enim. Quisque maximus enim nunc.</p> <p>Donec eu ultricies ipsum. Fusce eget pellentesque urna. Vestibulum lacinia laoreet mi nec posuere. Duis vel elit elementum, scelerisque eros a, sodales eros. Praesent hendrerit neque velit, nec pretium ipsum finibus facilisis. Proin ultricies sem in sapien consectetur dictum.</p>`;

describe('Test trim characters', () => {
  it('Trim text to 60 words', () => {
    const trimmedChar = trimWords(text, 60, '...');
    const expectedOutput = `What is Geostatistics? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere...`;

    assert.strictEqual(trimmedChar, expectedOutput);
  });
});
