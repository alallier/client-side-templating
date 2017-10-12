var fs = require('fs'),
    someHtml = fs.readFileSync('./test.html', 'utf8');

console.log(someHtml);
