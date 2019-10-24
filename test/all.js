var trimWords = require('trim-words');

var text = '<h1>What is Geostatistics?</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam ut ligula ullamcorper interdum. Nulla malesuada purus tristique justo tristique, id posuere purus tristique. Pellentesque non magna ut libero elementum interdum vel vitae ante. Sed porta auctor urna eget venenatis. Mauris nec convallis metus. Sed at dui elit. Donec rhoncus justo neque, finibus commodo dui posuere ut. Maecenas in mi enim. Quisque maximus enim nunc.</p> <p>Donec eu ultricies ipsum. Fusce eget pellentesque urna. Vestibulum lacinia laoreet mi nec posuere. Duis vel elit elementum, scelerisque eros a, sodales eros. Praesent hendrerit neque velit, nec pretium ipsum finibus facilisis. Proin ultricies sem in sapien consectetur dictum.</p>';

var trimmedText = trimWords(text, 60, '...');

console.log('-------------------------------');
console.log('Original Text is:');
console.log('-------------------------------');
console.log(text);
console.log('\n');
console.log('-------------------------------');
console.log('Trimmed Text is:');
console.log('-------------------------------');
console.log(trimmedText);
console.log('\n');
