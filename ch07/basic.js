var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response) {
    fs.readFile('ejsPage.ejs', 'utf8' ,function(error, data) {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end(ejs.render(data, {
            kk: 'alex',
            description: 'Hello ejs'
        }));
    });
}).listen(12345, function () {
    console.log('hello 123');
})