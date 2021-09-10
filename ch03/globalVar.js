console.log('filename:', __filename);
console.log('dirname:', __dirname);

console.time('alpha');
var output = 1;
for(var i = 1; i<= 10000; i++) {
	output += i;
}

console.log('Result:', output);

//시간 측정을 종료
console.timeEnd('alpha');

console.log('\u001b[31m', 'Hello World ..!');
console.log('\u001b[32m', 'Hello World ..!');
console.log('\u001b[33m', 'Hello World ..!');
console.log('\u001b[34m', 'Hello World ..!');
console.log('\u001b[35m', 'Hello World ..!');
console.log('\u001b[36m', 'Hello World ..!');
console.log('\u001b[37m', 'Hello World ..!');

