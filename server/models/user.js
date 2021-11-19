// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        
        phone: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'phone is required'
        },
        question: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'question is required'
        },
        answer: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'answer is required'
        },
        
        
       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
       },
       gender: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'gender is required'
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);