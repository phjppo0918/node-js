var express = require('express');

var app = express();

app.get('/a', function (request, response) {
    response.send('<a href= "/b">goto B </a>');
});

app.get('/b', function (request, response) {
    response.send('<a href= "/a">goto A </a>');
});

app.get('/page/:id', function (request, response) {
    var name = request.params.id;

    response.send('<h1>' + name + '</h1>');
})

app.listen(12345, function () {
    console.log('12345 run');
});
