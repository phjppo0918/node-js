var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'company'
});

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(12345, function () {
    console.log('12345 run');
});

app.get('/', function (request, response) {
    fs.readFile('list.html', 'utf8', function (error, data){
        client.query('SELECT * FROM product', function (error, results) {
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function (request, response) {
    client.query('DELETE FROM product WHERE id=?', [request.params.id], function () {
        response.redirect('/');
    });
});

app.get('/insert', function (request, response) {
    fs.readFile('insert.html', 'utf8', function (error, data) {
        response.send(data);
    });
});

app.post('/insert', function (request, response) {
    var body = request.body;

    client.query('INSERT INTO product (name, modelnumber, series) VALUES (?, ?, ?)', [body.name, body.modelnumber, body.series], function () {
        response.redirect('/');
    });
});

app.get('/edit/:id', function (request, response) {
    fs.readFile('edit.html', 'utf8', function (error, data) {
       client.query('SELECT * FROM product WHERE id = ?', [request.params.id], function (error, result) {
           response.send(ejs.render(data, {data:result[0]}));
       });
    });
});

app.post('/edit/:id', function (request, response) {
    var body = request.body;
    client.query('UPDATE product SET name=?, modelnumber=?, series=? WHERE id=?',
        [body.name, body.modelnumber, body.series, request.params.id], function () {
        response.redirect('/');
        });
});