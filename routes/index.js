const express = require('express');
const router = express.Router();

const Journey = require('../models/journey');

// Journeys Route
router.get('/' , (req, res) => {
	Journey.find({}, (err, journeys) => {
		if(err) {
			throw err;
		}
		res.render('index', {journeys: journeys});
	});
});

module.exports = router;