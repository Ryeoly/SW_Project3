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

/* GET users listing. */
router.get('/', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT * FROM item", function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                items = results;
                return res.json({items: items});
            }
        })
        connection.release();
    });
});

module.exports = router;


/*
* select * from item
*
*
* */
