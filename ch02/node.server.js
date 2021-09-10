//모듈을 추출
var http = require('http')

// 웹 서버를 만들고 실행
http.createServer(function (request, response) {
	
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<h1>Hello world...!</h1>');
}).listen(3000, function() {
	console.log('Server running at http://127.0.0.1:3000/');
});