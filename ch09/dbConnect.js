var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'company'
});

//데이터베이스 쿼리를 사용합니다.
//client.query('USE Company');
client.query('SELECT * FROM product', function (error ,result, fields) {
    if(error) {
        console.log(error);
    }else {
        console.log(result);
    }
})