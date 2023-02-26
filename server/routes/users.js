//Filename: Assignment1
//Student Name: Sirada Thoungvitayasutee
//Student ID: 301292632
//Date 26 Feb 2023-->

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
