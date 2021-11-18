let mongoose = require('mongoose');

// create a model class
let tournamentModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "tournaments"
});

module.exports = mongoose.model('Tournament', tournamentModel);