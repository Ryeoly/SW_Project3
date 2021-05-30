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
var item_data;
var recommend_data;
var qna_data;
var review_data;
var count_data;
router.post('/', function(req, res, next) {
    var user_idx=req.body.u_idx;
    var item_idx=req.body.i_idx; //front로부터  게임의 idx받아오기


    var item_sql='SELECT * FROM item WHERE idx= ?;';
    var item_sqls=mysql.format(item_sql,item_idx);

    var recommend_sql='SELECT item.idx AS idx, product,image1 FROM item,USER WHERE user.idx=? AND (item.genre=user.like_genre1 OR item.genre=user.like_genre2 OR item.genre=user.like_genre3) ORDER BY item.sold_num DESC;';
    var recommend_sqls=mysql.format(recommend_sql,user_idx);

    var qna_sql='SELECT qna_board.idx AS idx,title,create_time,NAME,content FROM qna_board,USER WHERE qna_board.i_idx=? AND qna_board.u_idx=user.idx AND qna_board.reply=0;';
    var qna_sqls=mysql.format(qna_sql,item_idx);

    var review_sql='SELECT review_board.idx AS idx,title,create_time,NAME,star,content FROM review_board,USER WHERE review_board.i_idx=? AND review_board.u_idx=user.idx;';
    var review_sqls=mysql.format(review_sql,item_idx);

    var count_sql='SELECT COUNT(*) AS cnt FROM review_board,USER WHERE review_board.i_idx=? AND review_board.u_idx=user.idx;';
    var count_sqls=mysql.format(count_sql,item_idx);

    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query(item_sqls+recommend_sqls+qna_sqls+review_sqls+count_sqls, function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                item_data = results[0];
                recommend_data = results[1];
                qna_data = results[2];
                review_data = results[3];
                count_data = results[4];
                res.send({success: true, item_data: item_data, recommend_data: recommend_data, qna_data: qna_data,review_data: review_data, count_data: count_data});
            }
        })
        connection.release();
    });
});

router.get('/', function(req, res, next) {
    res.send({success: true ,item_data: item_data, recommend_data: recommend_data, qna_data: qna_data,review_data: review_data, count_data: count_data});
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

//장바구니에 업데이트
router.post('/example',function (req,res,next) {
    var item_idx; //front로부터 게임의 idx받아오기
    var user_idx; //front로부터 유저의 idx받아오기
    var amount=req.body.amount;
    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("INSERT INTO basket(i_idx,amount,u_idx) VALUES(?,?,?)",[item_idx,amount,user_idx],function(err,rows){
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