var http = require('http');

http.createServer(function (request, response) {


    if(request.headers.cookie) {
        var cookie = request.headers.cookie.split(';').map(
            function (element) {
                var element = element.split('=');
                return {
                    key: element[0],
                    value: element[1]
                };
            }
        );

        response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    };

    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['name = alx', 'region = seoul']
    });

    response.end('<h1> 쿠키 생성 </h1>');
}).listen(1235, function () {
    console.log('123 run');
})