const express = require('express');
const sequelize = require('sequelize');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get('/', function(req,res){
  res.render('index');
});

app.listen(3000, function(req,res){
  console.log('You made it.');
});
