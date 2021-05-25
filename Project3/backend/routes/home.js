var express = require('express');
var router = express.Router();
let mysql = require('mysql'); //mysql 모듈을 로딩.
var pool = mysql.createPool({
    connectionLimit: 5,
    host     : 'gus007dn.iptime.org',
    user     : 'yunchoko',
    password : 'qwer1234!',
    database : 'yunchoko',
    port : 8204
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    var user = 'home';
    res.send({user: user});
});

router.post('/home',function (req,res,next) {

});

module.exports = router;


/*
* select * from banner where start_day <= str_to_date(now(),'%Y-%m-%d') and end_day > str_to_date(now(),'%Y-%m-%d') Limit 5;
*
* select * from user where idx = ''
* */
