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
router.get('/login', bookController.displayAddPage);

/*POST Router for processing the Login Page*/
router.post('/login', bookController.processAddPage);

/* GET Router for displaying the register Page*/
router.get('/register', bookController.displayAddPage);

/*POST Router for processing the register page*/
router.post('/register', bookController.processAddPage);




module.exports = router;
