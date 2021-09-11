var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query;

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(555, function() {
    console.log('test 555');
});