var express = require('express');
var router = express.Router();

var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
    var today = new Date();
    today = today.toISOString().substr(0, 8) + '25';
    res.render('index', { title: 'Dagsbudget', today: today });
});

module.exports = router;
