require('marko/node-require').install();

var include1 = require('./include1.marko');
var include2 = require('./include2.marko');

require('./template.marko').render({
    include: include1
}, process.stdout);

require('./template.marko').render({
    include: include2
}, process.stdout);