let express = require('express');
let router = express.Router();
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
}

module.exports.displayPage = (req, res, next) => {
    res.render('index', { title: 'About' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
}
