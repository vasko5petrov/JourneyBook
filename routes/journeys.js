const express = require('express');
const passport = require('passport');
const router = express.Router();

const Journey = require('../models/journey');
const User = require('../models/user');

// Journeys Route
router.get('/', passport.authenticate('jwt', {session:false}), (req, res) => {
	if(req.user) {
		Journey.find({author: req.user._id}, (err, journeys) => {
			if(err) {
				throw err;
			}
			res.json(journeys);
		});
	} else {
		res.json({success: false, message: 'Please login'});
	}
});

// Search Journeys Route
router.get('/search/:search', passport.authenticate('jwt', {session:false}), (req, res) => {
	if(req.user) {
		Journey.find({"title": {"$regex": req.params.search, "$options": "$i"}, author: req.user._id }, (err, journeys) => {
			if(!journeys) {
				res.json({success: false});
			}
			if(err) {
				throw err;
			}
			res.json(journeys);
		});
	} else {
		res.json({success: false});
	}

});

// Add Journey GET Route
router.get('/add', (req, res) => {
	res.render('journeys/add-journey');
});

// Add Journey POST Route
router.post('/add', passport.authenticate('jwt', {session:false}), (req, res) => {
	if(req.user) {
		req.checkBody('title', 'Title field is required').notEmpty();
		req.checkBody('location', 'Location field is required').notEmpty();
		req.checkBody('duration', 'Duration field is required').notEmpty();

		// Get Errors
		let errors = req.validationErrors();

		if(errors) {
			res.json({success:false, message: errors});
		} else {
			let newJourney = new Journey({
				title: req.body.title,
				location: req.body.location,
				duration: req.body.duration,
				type: req.body.type,
				rating: req.body.rating,
				imageUrl: req.body.imageUrl,
				author: req.user._id
			});

			Journey.addJourney(newJourney, (err, journey) => {
				if(err) {
					res.json({success: false, message: [{'message': err.message}]});
				} else {
					res.json({success: true, message: `Journey "${newJourney.title}" created!`});
					// console.log('Journey added!');
					// res.redirect('/');
				}
			});
		}
	} else {
		res.json({success: false, message: 'Please login'});
	}
});

// Edit Journey Submit POST Route
router.post('/:id/edit', passport.authenticate('jwt', {session:false}), (req, res) => {
	if(req.user) {
		Journey.getJourneyById(req.params.id, (err, journey) => {
			if(err) {
				res.json({success: false, message: 'Journey not found!'});
				return false;
			}
			if(journey == null) {
				res.json({success: false, message: 'Journey not found!'});
				return false;
			}
			if(journey.author != req.user._id) {
				res.json({success: false, message: 'Not Authorized'});
				return false;
			}

			req.checkBody('title', 'Title field is required').notEmpty();
			req.checkBody('location', 'Location field is required').notEmpty();
			req.checkBody('duration', 'Duration field is required').notEmpty();

			// Get Errors
			let errors = req.validationErrors();

			if(errors) {
				res.json({success:false, message: errors});
			}
			let query = {_id: req.params.id};

			let updatedJourney = {};

			updatedJourney.title = req.body.title;
			updatedJourney.location = req.body.location;
			updatedJourney.duration = req.body.duration;
			updatedJourney.type = req.body.type;
			updatedJourney.rating = req.body.rating;
			updatedJourney.imageUrl = req.body.imageUrl;

			if(journey.title === updatedJourney.title) {
				Journey.update(query, updatedJourney, (err) => {
					if(err) {
						res.json({success: false, message: [{'message': err.message}]});
					} else {
						res.json({success: true, message: `Journey "${updatedJourney.title}" has been updated!`});
					}
				});
			} else {
				Journey.find({'title' : updatedJourney.title}, function (err, docs) {
			    if (docs.length){
			    	res.json({success: false, message: [{'message': 'Title already exists'}]});
			    } else {
						Journey.update(query, updatedJourney, (err) => {
							if(err) {
								res.json({success: false, message: [{'message': err.message}]});
							} else {
								res.json({success: true, message: `Journey "${updatedJourney.title}" has been updated!`});
							}
						});
			    }
			  });
			}
		});
	} else {
		res.json({success: false, message: 'Please login'});
	}
});

// Journeys Route
router.get('/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
	if(req.user) {
		Journey.getJourneyById(req.params.id, (err, journey) => {
			if(err) {
				res.json({success: false, message: 'Journey not found!'});
				return false;
			}
			if(journey == null) {
				res.json({success: false, message: 'Journey not found!'});
				return false;
			}
			if(journey.author != req.user._id) {
				res.json({success: false, message: 'Not Authorized'});
				return false;
			}
			res.json({success: true, journey: journey});
		});
	} else {
		res.json({succes: false, message: 'Please login'});
	}
});

// Delete Route
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
	if(req.user) {
		Journey.getJourneyById(req.params.id, (err, journey) => {
			if(err) {
				res.json({success: false, message: `Journey not found!`});
				return false;
			}
			if(journey.author != req.user._id) {
				res.json({success: false, message: 'Not Authorized'});
				return false;
			}
			let query = {_id:req.params.id};
			Journey.remove(query, (err) => {
				if(err) {
					res.json({success: false, message: `There was a problem! Journey "${journey.title}" has not been deleted!`});
					return false;
				}
				res.json({success: true, message: `Journey has been deleted!`});
			});
		});
	} else {
		res.json({succes: false, message: 'Please login'});
	}
});

module.exports = router;
