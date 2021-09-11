var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/get-cookie', function (request, response) {
    response.send(request.cookies);
});

app.get('/set-cookie', function (request, response) {
    response.cookie('string', 'cookie');
    response.cookie('json', {
        name : 'cookie',
        property : 'delicious'
    });

    response.redirect('/get-cookie');
});

app.listen(12345, function () {
    console.log('12345 run');
});