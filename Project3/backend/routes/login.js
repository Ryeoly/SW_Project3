var express = require('express');
var router = express.Router();
let mysql = require('mysql'); //mysql 모듈을 로딩.
var pool = mysql.createPool({

});

//로그인 눌렀을떄
router.post('/',function (req,res,next) {
    var email=req.body.email;
    var pwd =req.body.pwd;
    var user_data;

    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query("SELECT idx AS useridx, name, YEAR(birth) AS nowyear, MONTH(birth) AS nowmonth, DAY(birth) AS nowday, phone,address,like_genre1,like_genre2,like_genre3 FROM USER WHERE email = ? AND pwd=?",[email,pwd],function(err,result){
            if(err){
                return res.json({success: false});
            }
            else{
                if(!result[0]){
                    return res.send({success: false});
                }
                else {
                    user_data=result;
                    return res.send({success: true, information: user_data});
                }
            }
        })
        connection.release();
    });
});


module.exports = router;
