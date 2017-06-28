const express = require('express');
const path = require('path');
const sequelize = require('sequelize');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const data = require('./data.js')

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// for(let i = 0; i < data.listItems.length; i++){
//   var todos = models.todos.build({
//     title: data.listItems[i].title,
//     description: data.listItems[i].description,
//     completed: data.listItems[i].completed
//   });
//   todos.save().then(function(todo){
//     console.log(todo.id);
//   });
// };
app.get('/', function(req, res){
  res.redirect('/link');
})


app.get('/link', function(req, res){
  models.todos.findAll().then(function (title){
    res.render('index', {listItems: title});
  });
});

app.post('/link', function(req, res){
  res.redirect('/link/newtask');
});

app.get('/link/newtask', function(req, res){
  res.render('newtask');
});



app.listen(3000, function(req,res){
  console.log('You made it.');
});
