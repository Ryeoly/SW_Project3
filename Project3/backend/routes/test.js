// var express = require('express');
// var router = express.Router();
// let mysql = require('mysql'); //mysql 모듈을 로딩.
// var pool = mysql.createPool({
//     connectionLimit: 5,
//     host     : 'gus007dn.iptime.org',
//     user     : 'root',
//     password : 'qwer1234!',
//     database : 'yunchoko'
// });
//
// router.post('/', function (req, res, next) {
//     pool.getConnection(function (err, connection) {
//         connection.query("SELECT * from user", function(err, results) {
//             if (err) {
//                 return res.json({success: false});
//             }
//             else return res.json(results);
//         })
//         connection.release();
//     });
// });
