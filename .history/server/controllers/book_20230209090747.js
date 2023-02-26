let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the db schema which is the model
let Book = require('../models')