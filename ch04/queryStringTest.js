var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http:/www.hanbit.co.kr/store/books');
console.log(querystring.parse(parsedObject.query));