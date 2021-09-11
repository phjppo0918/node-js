var express = require('express');

var app = express();

app.use(express.static(__dirname + '/img'));

app.use(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<img src="/다운로드.png" width="100%" />');
});

app.listen(12345, function () {
    console.log('12345 run');
});
