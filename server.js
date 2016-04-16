
'use strict';

let express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080;

// Database
//require('./api/config/database');

// Middleware 
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Routes
let apiRouter = require('./api/routes/index');

// Set routes to api
app.use('/api', apiRouter);

// Start server
app.listen(port);
console.log('Application started on port: ' + port);