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

router.post('/',function (req,res,next) {
    var i_idx=req.body.i_idx;
    var u_idx =req.body.u_idx;
    var amount = req.body.amount;
    var price = req.body.price;

    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("INSERT INTO basket(i_idx,amount,u_idx, total_price) VALUES(?,?,?,?);",[i_idx, amount, u_idx, price],function(err,result){
            if(err){
                return res.json({success: false});
            }
            else{
                return res.send({success: true});
            }
        })
        connection.release();
    });
});

router.post('/check', function(req,res,next){
    var basket_datas;
    var user_idx = req.body.user_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT item.idx, item.image1, item.product, basket.amount, item.price, basket.total_price FROM basket,item WHERE basket.complete=0 AND basket.u_idx=? AND item.idx=basket.i_idx;",[user_idx], function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                basket_datas = results;
                return res.send({success: true, basket_datas: basket_datas});
            }
        })
        connection.release();
    });
});

router.post('/update', function(req,res,next){
    var new_price = req.body.new_price;
    var new_amount = req.body.new_amount;
    var item_idx = req.body.item_idx;
    var user_idx = req.body.user_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("UPDATE basket SET amount=?, total_price=? WHERE u_idx=? AND i_idx=? AND complete=0;",[new_amount, new_price, user_idx, item_idx], function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                return res.send({success: true});
            }
        })
        connection.release();
    });
});

router.post('/delete', function(req,res,next){
    var item_idx = req.body.item_idx;
    var user_idx = req.body.user_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("DELETE FROM basket WHERE u_idx=? AND i_idx=? AND complete=0;",[user_idx, item_idx], function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                return res.send({success: true});
            }
        })
        connection.release();
    });
});


module.exports = router;
