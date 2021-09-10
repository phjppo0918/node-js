var http = require('http');

var server = http.createServer();

server.on('request', function (code) {
    console.log('Request On');
});

server.on('connection', function (code) {
    console.log('connection On');
});

server.on('close', function (code) {
    console.log('close On');
});

server.listen(3000);