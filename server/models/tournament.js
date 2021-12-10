let mongoose = require('mongoose');

// create a model class
let tournamentModel = mongoose.Schema({
    name: String,
    location: String,
    startDate: String,
    endDate: String,
    numberOfRounds: Number,
    winner: String
},
{
    collection: "tournaments"
});

module.exports = mongoose.model('Tournament', tournamentModel);