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

module.exports = router;


/*
* select * from banner where start_day <= str_to_date(now(),'%Y-%m-%d') and end_day > str_to_date(now(),'%Y-%m-%d') Limit 5;
*
* select * from user where idx = ''
* */
