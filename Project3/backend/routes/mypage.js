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
//유저 정보 가져오기
router.post('/', function(req, res, next) {
    var user_info;
    var user_idx=req.body.u_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT NAME,email FROM USER WHERE idx=?",[user_idx], function (err,result) {
            if(err){
                return res.json({success: false});
            }
            else{
                user_info = result;
                return res.send({user_info: user_info});
            }
        })
        connection.release();
    });
});

//구매 내역
router.post('/buyhistory', function(req, res, next) {
    var buy_history;
    var user_idx=req.body.u_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT item.image1 AS image, item.product AS product, basket.buy_time AS buytime, basket.amount AS amount, item.price AS price FROM basket,item WHERE basket.complete=1 AND basket.u_idx=? AND item.idx=basket.i_idx AND DATE_FORMAT(basket.buy_time,'%Y-%m-%d %T') ORDER BY basket.buy_time DESC",[user_idx], function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                buy_history = results;
                return res.send({success: true, historydatas: buy_history});
            }
        })
        connection.release();
    });
});


//자신이 쓴글

//Q&A문의



//개인정보 가져오기
router.post('/my_info', function(req, res, next) {
    var user_idx=req.body.user_idx; //유저 u_idx받아오기
    var information;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT NAME,YEAR(birth)AS YEAR, MONTH(birth) AS MONTH,DAY(birth) AS DAY, phone,address,like_genre1,like_genre2,like_genre3 FROM USER WHERE idx=?",[user_idx], function (err,result) {
            if(err){
                return res.json({success: false});
            }
            else{
                information = result;
                return res.send({information: information});
            }
        })
        connection.release();
    });
});

//개인정보 수정
router.post('/my_info/2', function(req, res, next) {
    var user_idx=req.body.user_idx; //유저 u_idx받아오기
    var name=req.body.name;
    var address=req.body.address;
    var phone =req.body.phone;
    var year=req.body.year;
    var month=req.body.month;
    var day=req.body.day;
    var birth = year+'-'+month+'-'+day;
    var like_genre1=req.body.like_genre1;
    var like_genre2=req.body.like_genre2;
    var like_genre3=req.body.like_genre3;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("UPDATE USER SET NAME=?, birth=?, phone=?, address=?, like_genre1=?, like_genre2=?, like_genre3=? WHERE idx=?",[name,birth,phone,address,like_genre1,like_genre2,like_genre3,user_idx], function (err,result) {
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
