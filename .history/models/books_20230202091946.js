let mongoose = require('mongoose');
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    Price: Number
},
    {
        collection: "books"
    });

    