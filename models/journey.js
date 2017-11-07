const mongoose = require('mongoose');

// Journey Schema
let journeySchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	location: {
		type: Object,
		required: true
	},
	duration: {
		type: Object,
		required: true
	},
	type: {
		type: String,
		required: false
	},
	rating: {
		type: String,
		required: false
	},
	imageUrl: {
		type: String,
		required: false
	}
});

let Journey = module.exports = mongoose.model('Journey', journeySchema);

module.exports.addJourney = (newJourney, callback) => {
	Journey.find({'title' : newJourney.title}, function (err, docs) {
    if (docs.length){
    	callback({message:'Title already exists'}, null);
    } else {
			newJourney.save(callback);
    }
  });
}

module.exports.getJourneyById = (id, callback) => {
	Journey.findById(id, callback);
}
