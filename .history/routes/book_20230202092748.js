let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our books model
let Book = require('../models/books');
//GET ROUTE for the book list page - READ Operation
router.get('/', (req, res, next) => {
    Book.find((err, BookList)=>{
        if (err)
            {}
    })
})
