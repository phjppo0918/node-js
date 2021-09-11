let express = require('express');

let app = express();

app.use(function (request, response) {

    var name = request.query.name;
    var region = request.query.region;

    response.send('<h1>'+ name + '-' + region + '</h1>');
});

app.listen(12345, function () {
    console.log('12345 run');
});

