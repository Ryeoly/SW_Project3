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
//상품 idx에따라 세부정보 받아오기
router.get('/example', function(req, res, next) {
    var item_idx; //front로부터  게임의 idx받아오기
    var item_info;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT * FROM item WHERE idx= ?",[item_idx], function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                item_info = results;
                return res.send({success: true ,item_info: item_info});
            }
        })
        connection.release();
    });
});

//좋아요 눌렀을떄 like_num update
router.post('/example',function (req,res,next) {
    var item_idx; //front로부터 게임의 idx받아오기
    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("UPDATE item SET like_num=like_num+1 WHERE idx=?",[item_idx],function(err,rows){
            if(err){
                return res.json({success: false});
            }
            else{
                res.send({success: true});
            }
        })
        connection.release();
    });
});

module.exports = router;