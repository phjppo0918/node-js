var http = require('http');

http.createServer(function (request, response) {
    if(request.method == 'GET') {
        console.log('GET 요청');
    } else if(request.method == 'POST') {
        console.log('POST 요청');
    }
}).listen(1234, function () {
    console.log('server run 1234');
});