let express = require('express');
let router = express.Router();
/*create the userModel instance*/
let UserModel = require('../models/user');
let User = UserModel.User;
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home'});
}
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About'});
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact'});
}

module.exports.displayLoginPage = (req, res, next) => {
    //check if the user is already logged in
    if (!req.user)
    {
        res.render('auth/login',
            {
                title: "Login",
                messages: req.flash('loginMessage'),
                displayName:req.user?req.user.displayName:''
        })
    }
    else
    {
        return res.redirect('/');
        }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        //server err
        if (err) {
            return next(err);
        }
        // is there a user login error?
        if (!user) {
            req.flash('loginMessage',
                'Authenticate Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server error?
            if (err) {
                return next(err);
            }
            return res.redirect('/bookList');
        });
    })(req, res, next);
}
module.exports.displayRegisterPage = (req, res, next) => {
    //check if the user is not already logged in
    if (!req.user)
    {
        res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.uer ? req.user.displayName : ''
            });
    }
    else
}