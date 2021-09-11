let express = require('express');

let app = express();

app.use(function (request, response, next) {
    request.number = 52;
    response.number = 273;
    next();
});



app.use(function (request, response, next) {

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1>'+ request.number +'='+ response.number +' </h1>');
});

app.listen(12345, function () {
    console.log('12345 run');
});

