//require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let user = mongoose.Schema
    (
        {
            username:
            {
                type: String,
                default: '',
                trim: true,
                required:'username is required'
            },
            password:
            {
                type:
            }
        }
    )