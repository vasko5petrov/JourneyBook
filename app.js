const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const expressHbs = require('express-handlebars');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const passport = require('passport');

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

app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "imageFile, Origin, X-Requested-With, Content-Type, Accept, Z-Key");
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
		res.header("Access-Control-Allow-Credentials", true);
    next();
});

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Bring in Models
let Journey = require('./models/journey');
let User = require('./models/user');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' }));
// Parse application/json
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Express Validator Middleware
app.use(expressValidator({
	errorFormatter: (param, message, value) => {
		let namespace = param.split('.'),
		root = namespace.shift(),
		formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			message: message,
			value: value
		};
	},
	customValidators: {
      // isTitleAvailable(title) {
      //   return new Promise((resolve, reject) => {
      //     Journey.findOne({ title: title }, (err, journey) => {
      //       if (err) throw err;
      //       if(journey == null) {
      //         resolve();
      //       } else {
      //         reject();
      //       }
      //     });
      //   });
      // }
  }
}));

// Route files
let index = require('./routes/index');
app.use('/api', index);
let images = require('./routes/images');
app.use('/api/images', images);
let journeys = require('./routes/journeys');
app.use('/api/journeys', journeys);
let users = require('./routes/users');
app.use('/api/users', users);
app.get('*', (req, res) => {
	res.sendFile(__dirname+'/public/index.html');
});

const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
	console.log('Server started on port '+ PORT);
});
