var fs = require('fs');
var express = require('express');
var multiPart = require('connect-multiparty');

var app = express();

app.use(multiPart({ uploadDir:__dirname + '/multipart'}));

app.get('/', function (request, response) {

    fs.readFile('page.html', function (error, data) {
        response.send(data.toString());
    });
});

app.post('/', function (request, response) {
    console.log(request.body);
    console.log(request.files);

    var comment = request.body.comment;
    var imageFile = request.files.image;

    if(imageFile && imageFile.size > 0) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        if (type.indexOf('image') != -1) {
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function (error ) {
                response.redirect('/');

            });
        }else {
            fs.unlink(path, function (error) {
                response.sendStatus(400);
            });
        }
    }else {
        //파일이 없는 경우
        response.sendStatus(404);
    }
});

app.listen(12345, function () {
    console.log('12345 run');
});