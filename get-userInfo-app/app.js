var getUserInfo = require('./getUserInfo.js');
var myArgs = process.argv.slice(2);
var userId = new getUserInfo(myArgs[0]);
userId;