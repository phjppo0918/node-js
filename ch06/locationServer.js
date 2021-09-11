var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(302, {'Location': 'http://www.naver.com'});
    response.end();
}).listen(5522, function () {
    console.log("run 5522");
})