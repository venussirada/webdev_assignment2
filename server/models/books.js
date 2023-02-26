//Filename: Assignment1
//Student Name: Sirada Thoungvitayasutee
//Student ID: 301292632
//Date 26 Feb 2023-->

let mongoose = require('mongoose');
let booksModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
    {
        collection: "books"
    });

module.exports = mongoose.model('book', booksModel);