var num = process.argv;
console.log(sum(num));

var fs = require("fs");
var path = process.argv[2];
var buffer = fs.readFileSync(path).toString().split('\n');
console.log(buffer.length-1);
