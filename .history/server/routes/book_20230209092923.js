let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Book = require('../models/books');
let bookController = require('../controllers/book');

// connect to our books model
let Book = require('../models/books');
//GET ROUTE for the book list page - READ Operation
router.get('/', bookController.displayBookList);

/*GET ROUTE for displaying the Add Page - CREATE Operation*/
router.get('/add',bookController.displayAddPage);

/* POST Route for processing the Add Page - CREATE Operation*/
router.post('/add', bookController.processAddPage);

/* GET Route for displaying the Edit page- Update Operation*/

router.get('/edit/:id',bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation*/

router.post('/edit/:id', book);

/* GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    Book.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/bookList');
        }
    });
});

module.exports = router;
