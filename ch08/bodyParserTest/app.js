var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (request, response) {

    if(request.cookies.auth) {
        response.send('<h1> login 성공</h1>');
    } else {
        response.redirect('/login');
    }

});
app.get('/login', function (request, response) {
    fs.readFile('login.html', function (error,data){
        response.send(data.toString());
    });
});

app.post('/login', function (request, response) {
    var id = request.body.id;
    var password = request.body.password;

    //출력
    console.log(id, password);
    console.log(request.body);

    if(id == 'rint' && password == '1234') {
        response.cookie('auth', true);
        response.redirect('/');
    }else {
        response.redirect('/login');
    }
});

app.listen(12345, function () {
    console.log('12345 run');
});