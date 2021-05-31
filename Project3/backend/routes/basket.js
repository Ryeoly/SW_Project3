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

    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("INSERT INTO basket(i_idx,amount,u_idx) VALUES(?,?,?);",[i_idx, amount, u_idx],function(err,result){
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
        connection.query("SELECT item.image1, item.product, basket.amount, item.price as total_price, item.price as original_price FROM basket,item WHERE basket.complete=0 AND basket.u_idx=? AND item.idx=basket.i_idx;",[user_idx], function (err,results) {
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


module.exports = router;
