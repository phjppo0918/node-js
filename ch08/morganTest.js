var express = require('express');
var morgan = require('morgan');

var app = express();

//app.use(morgan('combined'));
//app.use(morgan(':method + :date'));
app.use(morgan('short'));


app.use(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1> espress Basic </h1>');
});

app.listen(12345, function () {
    console.log('12345 run');
});