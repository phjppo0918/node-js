let express = require('express');

let app = express();

app.use(function (request, response, next) {
    console.log('첫 번째 미들웨어');
    next();
});

app.use(function (request, response, next) {
    console.log('두 번째 미들웨어');
    next();
});

app.use(function (request, response, next) {
    console.log('세 번째 미들웨어');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1> express Basic </h1>');
});

app.listen(12345, function () {
    console.log('12345 run');
});

