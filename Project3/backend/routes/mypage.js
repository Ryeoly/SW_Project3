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
router.post('/write_review', function(req, res, next) {
    var a = 1;
    var data=req.body;
    var b= 2;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("INSERT INTO review_board(title, content, star, u_idx, i_idx) VALUES(?, ?, ?, ?, ?);",[data.title, data.content, data.rating, data.u_idx,data.i_idx], function (err,result) {
        })
        connection.query("UPDATE item SET star= star+? WHERE idx=?;",[data.i_idx], function (err,result) {
        })
        connection.release();
    });
});

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
        connection.query("SELECT item.idx as i_idx,item.image1 AS image, item.product AS product, basket.buy_time AS buytime, basket.amount AS amount, item.price AS price FROM basket,item WHERE basket.complete=1 AND basket.u_idx=? AND item.idx=basket.i_idx AND DATE_FORMAT(basket.buy_time,'%Y-%m-%d %T') ORDER BY basket.buy_time DESC",[user_idx], function (err,results) {
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
router.post('/qna', function(req, res, next) {
    var treat;
    var untreat;
    var user_idx=req.body.u_idx; //유저 u_idx받아오기

    var treatsql='SELECT qnaq.title, qnaq.content, qnaq.create_time, userq.name, qnaa.content AS re_content FROM qna_board qnaa, qna_board qnaq ,USER userq WHERE qnaq.reply=1 AND qnaa.parent_idx=qnaq.idx AND qnaq.parent_idx=0 AND qnaq.u_idx=userq.idx AND qnaq.u_idx=?;';
    var treatsqls=mysql.format(treatsql,user_idx);

    var untreatsql='SELECT qna_board.title, qna_board.content, qna_board.create_time, user.name FROM qna_board,USER WHERE reply=0 AND parent_idx=0 AND qna_board.u_idx= user.idx AND qna_board.u_idx=?;';
    var untreatsqls=mysql.format(untreatsql,user_idx);


    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query(treatsqls+untreatsqls, function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                treat=results[0];
                untreat=results[1];
                return res.send({success: true, treat: treat, untreat: untreat});
            }
        })
        connection.release();
    });
});

//qna삽입
router.post('/qnasend', function(req, res, next) {
    var user_idx=req.body.user_idx; //유저 u_idx받아오기
    var product=req.body.product;
    var content=req.body.content;
    var title=req.body.title;
    var i_idx;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT idx FROM item WHERE product=?",[product], function (err,item_idx) {
            if(err){
                return res.json({success: false});
            }
            else{

                i_idx=item_idx;
                var a=1;
                connection.query("INSERT INTO qna_board(title,content,u_idx,i_idx) VALUES(?,?,?,?)",[title, content,user_idx,i_idx[0].idx],function(err,result){
                    if(err){

                        return res.json({success: false});
                    }
                    else{
                        var b=1;
                        return res.send({success: true});
                    }
                })

            }
        })
        connection.release();
    });
});



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
