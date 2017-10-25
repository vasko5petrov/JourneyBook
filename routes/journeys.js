const express = require('express');
const router = express.Router();

const Journey = require('../models/journey');

// Journeys Route
router.get('/' , (req, res) => {
	Journey.find({}, (err, journeys) => {
		if(err) {
			throw err;
		}
		res.json(journeys);
	});
});

// Add Journey GET Route
router.get('/add', (req, res) => {
	res.render('journeys/add-journey');
});

// Add Journey POST Route
router.post('/add', (req, res) => {

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
			imageUrl: req.body.imageUrl
		});

		Journey.addJourney(newJourney, (err, journey) => {
			if(err) {
				res.json({success: false, message: err.message});
			} else {
				res.json({success: true, message: `Journey "${newJourney.title}" created!`});
				// console.log('Journey added!');
				// res.redirect('/');
			}
		});
	}
});

// Edit Journey Submit POST Route
router.post('/:id/edit', (req, res) => {
	req.checkBody('title', 'Title field is required').notEmpty();
	req.checkBody('location', 'Location field is required').notEmpty();
	req.checkBody('duration', 'Duration field is required').notEmpty();

	// Get Errors
	let errors = req.validationErrors();

	if(errors) {
		res.json({success:false, message: errors});
	} else {
		let query = {_id: req.params.id};

		let journey = {};

		journey.title = req.body.title;
		journey.location = req.body.location;
		journey.duration = req.body.duration;
		journey.type = req.body.type;
		journey.rating = req.body.rating;
		journey.imageUrl = req.body.imageUrl;

		Journey.update(query, journey, (err) => {
			if(err) {
				res.json({success: false, message: err.message});
			} else {
				res.json({success: true, message: `Journey "${journey.title}" has been updated!`});
			}
		});
	}
});

// Journeys Route
router.get('/:id' , (req, res) => {
	Journey.getJourneyById(req.params.id, (err, journey) => {
		if(err) {
			throw err;
		}
		if(journey == null) {
			res.json({success: false, message: 'Journey not found!'});
			return;
		}
		res.json({success: true, journey: journey});
	});
});

// Delete Route
router.delete('/delete/:id', (req, res) => {
		Journey.getJourneyById(req.params.id, (err, journey) => {
			if(err) {
				res.json({success: false, message: `Journey not found!`});
			}
			let query = {_id:req.params.id};
			Journey.remove(query, (err) => {
				if(err) {
					res.json({success: false, message: `There was a problem! Journey "${journey.title}" has not been deleted!`});
				}
				res.json({success: true, message: `Journey has been deleted!`});
			});
		});
});

module.exports = router;
