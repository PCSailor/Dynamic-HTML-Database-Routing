var express = require('express');
var app = express();
var path = require('path');
var powers = require('./routes/superpowers.js');
var heroes = require('./routes/heroes.js');
var heroDetails = require('./routes/hero-details.routes.js');
var bodyParser = require('body-parser');

// parses angular request body on Post and Put requests
app.use(bodyParser.json());

// serve static files
app.use(express.static(path.resolve('./server/public'))); // NOTE: Keep this code on top

// serve index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html')); // NOTE: Keep these code lines on top
});

// Routes
app.use('/powers', powers);
app.use('/heroes', heroes);
app.use('/herodetails/', heroDetails);


// start server
app.listen(3000, function() {
  console.log("server running, check localhost:3000");
});
