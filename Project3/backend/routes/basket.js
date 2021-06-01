var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
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
        connection.query("SELECT basket.idx AS basketidx, item.idx, item.image1, item.product, basket.amount, item.price, basket.total_price FROM basket,item WHERE basket.complete=0 AND basket.u_idx=? AND item.idx=basket.i_idx;",[user_idx], function (err,results) {
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

let key1=0; //key값 비교
let key2=0;
let key3=0;
let key4=0;
//인증코드 발생
var generateKey = function(min,max){
    var generate_key = Math.floor(Math.random()*(max-min+1)) + min;
    return generate_key;
}

//인증코드 이메일발신
router.post("/sendcode",function(req,res,next){
    let email =req.body.email;
    var names=req.body.names;
    var name=[];
    var text="";
    for(let i=0;i<names.length;i++){
        name[i]=names[i][2];
    }
    for(let i=0;i<names.length;i++){
        key1 =generateKey(1111,9999);
        key2 =generateKey(1111,9999);
        key3 =generateKey(1111,9999);
        key4 =generateKey(1111,9999);
        text+=name[i]+" : "+key1+"-"+key2+"-"+key3+"-"+key4+"\n"

    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dtree0520@gmail.com',
            pass: 'keonyoung520'
        }
    });

    let mailOptions = {
        from: 'dtree0520@gmail.com',
        to: email,
        subject: "[윤초코]결제완료 및 코드발송 이메일 입니다.",
        text: "안녕하세요. 윤초코입니다.\n결제가 완료되어 게임코드 보내드립니다.\n즐거운게임하세요.\n 게임코드:\n " + text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else {
            console.log('Email 전송완료: ' + info.response);
        }
    });

    return res.send({success:true});

});

//complete바꾸기
router.post('/updateidx',function (req,res,next) {
    var sqls="";
    var updateidxs=req.body.updateidxs;
    for(let i=0;i<updateidxs.length;i++){
        var query = mysql.format("UPDATE basket SET complete=1 WHERE idx=?;", updateidxs[i][1]);
        sqls += query;
    }

    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query(sqls,function(err,rows){
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

router.get('/all_list', function(req,res,next){
    var sale_list;
    pool.getConnection(function (err,connection) {
        if(err) throw err;
        connection.query("SELECT item.image1 as image, item.product as product,basket.buy_time as buy_time, basket.amount as amount, basket.total_price as total_price FROM basket,item WHERE basket.complete=1 AND item.idx=basket.i_idx order by buy_time desc;",function (err,results) {
            if(err){
                return res.json({success: false});
            }
            else{
                sale_list = results;
                return res.send({sale_list: sale_list});
            }
        })
        connection.release();
    });
});


module.exports = router;
