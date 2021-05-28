var express = require('express');
var router = express.Router();

/* GET users listing. */
//구매 내역
router.get('/', function(req, res, next) {
    var buy_history;
    var user_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT * FROM basket,item WHERE basket.complete=1 AND basket.u_idx=? AND item.idx=basket.i_idx",[user_idx], function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                buy_history = results;
                return res.send({buy_history: buy_history});
            }
        })
        connection.release();
    });
});


//자신이 쓴글

//Q&A문의

//개인정보 수정
router.post('/', function(req, res, next) {
    var name=req.body.name;
    var year =req.body.year;
    var month=req.body.month;
    var day=req.body.day;
    var birth = year+'-'+month+'-'+day;
    var phone =req.body.phone;
    var address=req.body.address;
    var user_idx; //유저 u_idx받아오기
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("UPDATE USER SET NAME=?,birth=?,phone=?,address=? WHERE idx=?;",[name,birth,phone,address,user_idx], function (err,results) {
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




module.exports = router;
