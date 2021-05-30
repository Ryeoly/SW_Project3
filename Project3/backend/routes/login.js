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

//로그인 눌렀을떄
router.post('/',function (req,res,next) {
    var email=req.body.email;
    var pwd =req.body.pwd;
    var user_idx;

    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("SELECT idx FROM USER WHERE email = ? AND pwd=?",[email,pwd],function(err,result){
            if(err){
                return res.json({success: false});
            }
            else{
                if(!result[0]){
                    return res.send({success: false});
                }
                else {
                    user_idx=result;
                    return res.send({success: true,user_idx: user_idx});
                }
            }
        })
        connection.release();
    });
});


module.exports = router;
