var express = require('express');
var router = express.Router();
let mysql = require('mysql'); //mysql 모듈을 로딩.
var pool = mysql.createPool({
    connectionLimit: 5,
    host     : 'gus007dn.iptime.org',
    user     : 'yunchoko',
    password : 'qwer1234!',
    database : 'yunchoko',
    port : 8204,
    multipleStatements: true
});

/* GET users listing. */
var list='sold_num';
var genre='ALL';

//All
router.get('/', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item ORDER BY " + list + " DESC",function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                items = results;
                return res.send({items: items});
            }
        })
        connection.release();
    });
});


//Action
router.post('/genre', function(req, res, next) {
    genre=req.body.genre;
    list = list.replace('"', "");
    var query ="";
    if(genre == "ALL"){
        genre = "%";
    }
    query = "SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre like ? ORDER BY " + list + " DESC";
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query(query, genre ,function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                items = results;
                return res.send({items: items});
            }
        })
        connection.release();
    });
});

//Action
router.post('/list', function(req, res, next) {
    list=req.body.list;
    list =list.replace('"', "");
    var query ="";
    if(genre == "ALL"){
        genre = "%"
    }
    query = "SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre like ? ORDER BY " + list + " DESC";
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query(query, genre ,function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                items = results;
                return res.send({items: items});
            }
        })
        connection.release();
    });
});

module.exports = router;



