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
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre=? ORDER BY ? DESC",[genre,list],function (err,results) {
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
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre=? ORDER BY ? DESC",[genre,list] ,function (err,results) {
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
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre=? ORDER BY ? DESC",[genre,list] ,function (err,results) {
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





















//Arcade
router.get('/genre', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre='Arcade'", function (err,results) {
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

//FPS
router.get('/FPS', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre='FPS'", function (err,results) {
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

//Role Play
router.get('/Role Play', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre='Role Play'", function (err,results) {
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

//RPG
router.get('/RPG', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre='RPG'", function (err,results) {
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

//Simulation
router.get('/simulation', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre='simulation'", function (err,results) {
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

//Video Game
router.get('/Video Game', function(req, res, next) {
    var items;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx,product,price,image1,video1,sold_num,remain_num,star FROM item where genre='Video Game'", function (err,results) {
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



