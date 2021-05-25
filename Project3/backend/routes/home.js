var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var user = 'home';
    res.send({user: user});
});

module.exports = router;


/*
* select * from banner where start_day <= str_to_date(now(),'%Y-%m-%d') and end_day > str_to_date(now(),'%Y-%m-%d') Limit 5;
*
* select * from user where idx = ''
* */
