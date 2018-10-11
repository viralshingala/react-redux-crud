var jsonServer = require('json-server');
var db = require('./db');
var cors = require('cors');
var bodyParser = require('body-parser');
var validate = require('express-validation');
var validations = require('./validations');

var app = jsonServer.create();

app.use(cors());
app.use(bodyParser.json());

app.post('/cars', validate(validations.car), function(req, res, next){  
  next();
});

app.put('/cars/:id', validate(validations.car), function(req, res, next){
  next();
});

app.use(jsonServer.router(db));
app.use(jsonServer.defaults());

app.listen(8081);
