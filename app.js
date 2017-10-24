const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressHbs = require('express-handlebars');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

const config = require('./config/database');

// Connect to Database
mongoose.connect(config.database, {useMongoClient: true});
let db = mongoose.connection;

// Check connection
db.once('open', () => {
	console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
	console.log(err);
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Z-Key");
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Bring in Models
let Journey = require('./models/journey');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());

// Express Validator Middleware
app.use(expressValidator({
	errorFormatter: (param, msg, value) => {
		let namespace = param.split('.'),
		root = namespace.shift(),
		formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	},
	customValidators: {
      isEmailAvailable(email) {
        return new Promise((resolve, reject) => {
          User.findOne({ email: email }, (err, user) => {
            if (err) throw err;
            if(user == null) {
              resolve();
            } else {
              reject();
            }
          });
        });
      },
      isUsernameAvailable(username) {
        return new Promise((resolve, reject) => {
          User.findOne({ username: username }, (err, user) => {
            if (err) throw err;
            if(user == null) {
              resolve();
            } else {
              reject();
            }
          });
        });
      }
    }
}));

// Route files
let images = require('./routes/images');
app.use('/images', images);
let index = require('./routes/index');
app.use('/', index);
let journeys = require('./routes/journeys');
app.use('/journeys', journeys);

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
	console.log('Server started on port '+ PORT);
});
