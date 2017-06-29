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
//     description: data.listItems[i].description,
//     completed: data.listItems[i].completed
//   });
//   todos.save().then(function(todo){
//     console.log(todo.id);
//   });
// };

const getTodo = function (req, res, next) {
    models.todos.findById(req.params.id).then(function (todo) {
        if (todo) {
            req.todos = todo;
            next();
        } else {
            res.status(404).send('Not found.');
        }
    })
}

app.get('/', function(req, res){
  res.redirect('/link');
})


app.get('/link', function(req, res){
  models.todos.findAll().then(function (title){
    res.render('index', {listItems: title});
  });
});

app.post('/link', function(req, res){
  var todo = models.todos.build({
      description: req.body.todoInput,
      completed: 'f'
    });
    todo.save().then(function(tod){
      console.log(tod);
    })
  res.redirect('/link');
});

// app.get('/link/newtask', function(req, res){
//   res.render('newtask');
// });

app.get('/link/:id/edit', function(req, res){
  models.todos.findById(req.params.id).then(function(todo){
    res.render('edit',{description: todo.description, completed: todo.completed});
  });
})

app.post('/link/:id/edit', function(req, res){
  todos.update
  ({
      description: req.body.description,
      completed: req.body.completed
  },
  {
    where:
    {
      id: req.params.id
    }
  }).then(function()
  {
    res.redirect('/link');
  })
})



app.get('/link/:id/delete', function(req, res){
  models.todos.findById(req.params.id).then(function(todo){
    res.render('delete',{description: todo.description, completed: todo.completed});
  });
})

app.post('/link/:id/delete', getTodo, function(req, res){
  let tempId = req.parms.id;
  req.todos.destroy().then(function(){
    req.parmas.id = tempId;
  })
  res.redirect('/');
})



app.listen(3000, function(req,res){
  console.log('You made it.');
});
