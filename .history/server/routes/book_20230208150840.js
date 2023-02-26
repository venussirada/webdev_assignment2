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
            res.render('book', { title: 'Books', BookList: bookList });
        }
    });
});

/*GET ROUTE for displaying the Add Page - CREATE Operation*/
router.get('/add', (req, res, next) => {
    
})

/* POST Route for processing the Add Page - CREATE Operation*/

/* GET Route for displaying the Edit page- Update Operation*/

/* POST Route for processing the Edit page - UPDATE operation*/

/* GET to perform Deletion - DELETE Operation*/


module.exports = router;
