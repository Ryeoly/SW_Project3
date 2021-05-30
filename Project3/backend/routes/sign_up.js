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

let key=0; //key값 비교
//인증코드 발생
var generateKey = function(min,max){
    var generate_key = Math.floor(Math.random()*(max-min+1)) + min;
    return generate_key;
}

//인증코드 이메일발신
router.post("/sendauth",function(req,res,next){
    let email =req.body.email;
    key =generateKey(1111,9999);

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
        subject: "[윤초코]인증 관련 이메일 입니다.",
        text: "오른쪽 숫자 4자리를 입력해주세요 : " + key
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else {
            console.log('Email 전송완료: ' + info.response);
        }
    });

    return res.send({success:true, truekey: key});

});
//회원가입 추가
router.post('/',function (req,res,next) {
    var email=req.body.email;
    var pwd =req.body.pwd;
    var name = req.body.name;
    var year =req.body.year;
    var month = req.body.month;
    var day = req.body.day;
    var birth = year+'-'+month+'-'+day;
    var phone =req.body.phone;
    var address =req.body.address;
    var like_genre1=req.body.like_genre1;
    var like_genre2=req.body.like_genre2;
    var like_genre3=req.body.like_genre3;

    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("INSERT INTO USER(email,pwd,NAME,birth,phone,address,like_genre1,like_genre2,like_genre3) VALUES(?,?,?,?,?,?,?,?,?)",[email,pwd,name,birth,phone,address,like_genre1,like_genre2,like_genre3],function(err,rows){
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
