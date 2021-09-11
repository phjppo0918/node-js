var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    fs.readFile('다운로드.png', function (error, data) {
        response.writeHead(200, {'content-Type': 'image/png'});
        response.end(data);
    })

}).listen(52273, function () {
    console.log("server 52273 runing")
})