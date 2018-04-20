var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Mediatheque = require('./api/models/mediathequeModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.3:27017/albums');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var routes = require('./api/routes/mediathequeRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Mediatheque RESTful API server started on: ' + port);