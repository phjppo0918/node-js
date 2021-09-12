var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (request, response) {
    fs.readFile('page.html', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(12345, function () {
    console.log('12345 run');
});

var io = socketio.listen(server);
io.socket.on('connection', function (socket) {

});