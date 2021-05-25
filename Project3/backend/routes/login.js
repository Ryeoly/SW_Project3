// const express = require('express');
// const router = express.Router();
//
// const users = require('../data/user.json');
//
// router.get('/', function(req, res, next) {
//     res.json({ user: users[0] });
// });


var express = require('express');
var router = express.Router();
let mysql = require('mysql'); //mysql 모듈을 로딩.
var pool = mysql.createPool({
    connectionLimit: 5,
    host     : 'gus007dn.iptime.org',
    user     : 'yunchoko',
    password : 'qwer1234!',
    database : 'yunchoko',
    port : 8204
});

router.get('/', function (req, res, next) {
    var a = 1;
    pool.getConnection(function (err, connection) {
        var b =1;
        if(err) throw err;
        connection.query("SELECT * from user", function(err, results) {
            if (err) {
                return res.json({success: false});
            }
            else{
                const user = results[0];
                return res.json({user: user});
            }
        })
        connection.release();
    });
});

router.post('/login',function (req,res,next) {
    
});
module.exports = router;
