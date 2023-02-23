// Filename: Assignment1
// Student Name: Sirada Thoungvitayasutee
// Student ID: 301292632
//Date 12 Feb 2023

//Services page information
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Title:', { title: 'Home' });
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: "Home" });
});

/*About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/*Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/*Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/*Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

router.post('/home', function(req, res, next) {
  res.render('index', { title: "Home" });
});


module.exports = router;
