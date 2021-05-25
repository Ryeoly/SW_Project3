var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var user = 'shop';
    res.send({user: user});
});

module.exports = router;


/*
* select * from item
*
*
* */
