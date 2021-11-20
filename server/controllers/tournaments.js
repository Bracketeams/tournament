let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Tournament = require('../models/tournament');

module.exports.displayTournamentList = (req, res, next) => {
    Tournament.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            /*
            res.render('book/list', 
            {title: 'Books', 
            BookList: bookList, 
            displayName: req.user ? req.user.displayName : ''});      
            */

            res.json(bookList);
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    /*
    res.render('book/add', {title: 'Add Tournament', 
    displayName: req.user ? req.user.displayName : ''});
    */
   
    res.json({success: true, msg: 'Succesfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {
    let newTournament = Tournament({
        "name": req.body.name,
        "location": req.body.location,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "numberOfRounds": req.body.numberOfRounds
    });

    Tournament.create(newTournament, (err, newTournament) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            //res.redirect('/book-list');

            res.json({success: true, msg: 'Successfully Added New Tournament'});
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Tournament.findById(id, (err, tournamentToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            /*
            res.render('book/edit', {title: 'Edit Tournament', book: bookToEdit, 
            displayName: req.user ? req.user.displayName : ''});
            */

            res.json({success: true, msg: 'Successfully Displayed Tournament to Edit', tournament: tournamentToEdit});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedtournament = Tournament({
        "_id": id,
        "name": req.body.name,
        "location": req.body.location,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "numberOfRounds": req.body.numberOfRounds
    });

    Tournament.updateOne({_id: id}, updatedtournament, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            //res.redirect('/book-list');

            res.json({success: true, msg: 'Successfully Edited Tournament', tournament: updatedtournament});
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Tournament.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             //res.redirect('/book-list');

             res.json({success: true, msg: 'Successfully Deleted Tournament'});
        }
    });
}