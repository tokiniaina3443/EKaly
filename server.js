require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

var mongoose = require('mongoose');

var app = express();
var morgan = require('morgan');
var router = express.Router();
var appRoutes = require('./routes/index.router')(router);
var path = require('path');

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/dist/ekaly-front'));
app.use('/api', appRoutes);
// Set Application Static
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/ekaly-front/index.html')); // Set index.html as layout
});

// error handlers
app.use((err, req, res,next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

// Start Server
app.listen(process.env.PORT || 5000,'0.0.0.0', function() {
    console.log('Running the server on port 5000 / ' + process.env.PORT); // Listen on configured port
});


