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

router.get('/trend', function(req, res, next) {
    var genre_data;
    var month_data;
    var sell_data;
    var genre_sql='select sum(amount) as amount FROM (SELECT item.genre,basket.amount FROM item, basket WHERE item.idx=basket.i_idx AND basket.complete=1) as t GROUP BY genre;';

    var month_sql='select sum(amount) as amount FROM (SELECT DATE_FORMAT(basket.buy_time ,\'%Y-%m\') as time,basket.amount FROM item, basket WHERE item.idx=basket.i_idx AND basket.complete=1) as t GROUP BY time;';

    var sell_sql='select sum(total_price) as price from (SELECT DATE_FORMAT(basket.buy_time ,\'%Y-%m\') as time, basket.total_price FROM item, basket WHERE item.idx=basket.i_idx AND basket.complete=1) as t group by time;';

    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query(genre_sql + month_sql + sell_sql, function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                genre_data = results[0];
                month_data = results[1];
                sell_data = results[2];
                return res.send({success: true, genre_data: genre_data, month_data: month_data, sell_data: sell_data});
            }
        })
        connection.release();
    });
});



/*
* select * from banner where start_day <= str_to_date(now(),'%Y-%m-%d') and end_day > str_to_date(now(),'%Y-%m-%d') Limit 5;
*
* select * from user where idx = ''
* */
//물품추가
router.post('/add',function (req,res,next) {
    var product=req.body.product;
    var price=req.body.price;
    var genre=req.body.genre;
    var content1=req.body.content1;
    var content2=req.body.content2;
    var content3=req.body.content3;
    var image1=req.body.image1;
    var image2=req.body.image2;
    var image3=req.body.image3;
    var video1=req.body.video1;
    var youtube1=req.body.youtube1;
    var youtube2=req.body.youtube2;
    var youtube3=req.body.youtube3;
    var remain_num=req.body.remain_num;
    var release_day=req.body.release_day;
    var age=req.body.age;
    var discount=req.body.discount;

    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("INSERT INTO item(product,price,genre,content1,content2,content3,image1,image2,image3,video1,youtube1,youtube2,youtube3,remain_num,release_day,age,discount) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[product,price,genre,content1,content2,content3,image1,image2,image3,video1,youtube1,youtube2,youtube3,remain_num,release_day,age,discount],function(err,result){
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

//qna
router.get('/qna', function(req, res, next) {
    var treat;
    var untreat;

    var treatsql='SELECT qnaq.idx, qnaq.i_idx AS itemidx , qnaq.title, qnaq.content, qnaq.create_time, userq.name, qnaa.content AS re_content FROM qna_board qnaa, qna_board qnaq ,USER userq WHERE qnaq.reply=1 AND qnaa.parent_idx=qnaq.idx AND qnaq.parent_idx=0 AND qnaq.u_idx=userq.idx;';

    var untreatsql='SELECT qna_board.idx, qna_board.i_idx AS itemidx, qna_board.title, qna_board.content, qna_board.create_time, user.name FROM qna_board,USER WHERE reply=0 AND parent_idx=0 AND qna_board.u_idx= user.idx;';


    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query(treatsql+untreatsql, function (err,results) {
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

//답글달기
router.post('/qnasend', function(req, res, next) {
    var parent_idx=req.body.parent_idx; //유저 u_idx받아오기
    var content=req.body.content;
    var item_idx=req.body.item_idx;

    var sql1="INSERT INTO qna_board(parent_idx,content,reply,u_idx,i_idx) VALUES(?,?,1,2,?);";
    var sql2="UPDATE qna_board SET reply=1 WHERE idx=?;";

    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query(sql1+sql2,[parent_idx,content,item_idx,parent_idx], function (err,item_idx) {
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
