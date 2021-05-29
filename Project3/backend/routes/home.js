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

//장바구니 내욜 가져오기
router.post('/', function(req, res, next) {
    var basket_datas;
    var user_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT item.image1, item.product, basket.amount, item.price FROM basket,item WHERE basket.complete=0 AND basket.u_idx=? AND item.idx=basket.i_idx;",[user_idx], function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                basket_datas = results;
                return res.send({basket_datas: basket_datas});
            }
        })
        connection.release();
    });
});

router.post('/home',function (req,res,next) {

});

module.exports = router;


/*
* select * from banner where start_day <= str_to_date(now(),'%Y-%m-%d') and end_day > str_to_date(now(),'%Y-%m-%d') Limit 5;
*
* select * from user where idx = ''
* */
