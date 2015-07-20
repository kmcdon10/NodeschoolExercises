// Hello World
console.log("HELLO WORLD");


// Baby steps
function sum(num) {
	var total = 0;
	for (var i = 2; i < num.length; i++) {
		total += parseInt(num[i]);
	}
	return total;
};
console.log(sum(process.argv));


//My first I/O
var fs1 = require("fs");
var buffer = fs1.readFileSync(process.argv[2]).toString().split('\n');
console.log(buffer.length-1);


// My first async I/o
var fs2 = require("fs");
fs2.readFile(process.argv[2], 'utf-8', function done(err, content) {
	if (err) { 
		throw err; 
	}
	console.log(content.split('\n').length - 1);
});

