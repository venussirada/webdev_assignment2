let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our books model
let Book = require('../models/books');
//GET ROUTE for the book list page - READ Operation
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(BookList);
            res.render('book/list', { title: 'Books', BookList: bookList });
        }
    });
});

/*GET ROUTE for displaying the Add Page - CREATE Operation*/
router.get('/add', (req, res, next) => {
    res.render('book/add', { title: 'BooksAdd ', BookList: bookList });
});

/* POST Route for processing the Add Page - CREATE Operation*/
router.post('/add', (req, res, next) => {
    
});

/* GET Route for displaying the Edit page- Update Operation*/

router.get('/edit/:id', (req, res, next) => {
    
});

/* POST Route for processing the Edit page - UPDATE operation*/

router.post('/edit/:id', (req, res, next) => {
    
});

/* GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id', (req, res, next) => {
    
});

module.exports = router;
