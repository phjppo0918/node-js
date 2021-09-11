var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000
    }
}));

app.use(function (request, response) {
    request.session.new = (new Date()).toUTCString();

    response.send(request.session);
});

app.listen(12345, function () {
    console.log('12345 run');
});