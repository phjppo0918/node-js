var express = require('express');

var app = express();

app.use(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1> Hello express </h1>');
});

app.listen(12345, function() {
    console.log("12345 run");
});