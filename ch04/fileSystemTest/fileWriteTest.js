var fs = require('fs');

var data = "Hello World...!";

fs.writeFile('write.txt', data, 'utf8', function (error) {
    console.log("WRITE FILE ASYNC COMPLETE");
});

fs.writeFileSync('writeSync.txt', data, 'utf8');
console.log("WRITE FILE SYNC COMPLETE");


