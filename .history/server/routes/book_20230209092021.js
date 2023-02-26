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
router.get('/add',bookController. );

/* POST Route for processing the Add Page - CREATE Operation*/
router.post('/add', (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "price": req.body.price
    });
    Book.create(newBook, (err, Book) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/bookList');
        }
    });
});

/* GET Route for displaying the Edit page- Update Operation*/

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    Book.findById(id, (err, bookToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('book/edit', { title: 'Edit Book', book: bookToEdit });
        }
    });
});

/* POST Route for processing the Edit page - UPDATE operation*/

router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.updateOne({ _id: id }, updatedBook, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/bookList');
        }
    });
});

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
