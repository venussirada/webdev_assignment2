//Filename: Assignment1
//Student Name: Sirada Thoungvitayasutee
//Student ID: 301292632
//Date 26 Feb 2023-->

let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/products', indexController.displayProductsPage);


router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);

/*GET Router for displaying the login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Router for processing the Login Page*/
router.post('/login', indexController.processLoginPage);

/* GET Router for displaying the register Page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Router for processing the register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);



module.exports = router;
