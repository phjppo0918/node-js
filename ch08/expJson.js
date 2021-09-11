let express = require('express');

let app = express();

app.use(function (request, response) {
    var output = [];
    for (var i = 0; i < 3; i++) {
        output.push({
            count : i,
            name: 'name - ' + i
        });
    }

    response.send(output);
});

app.listen(12345, function () {
    console.log('12345 run')
})

