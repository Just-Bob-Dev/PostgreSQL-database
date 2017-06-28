const express = require('express');
const router = express.Router();
const models = require('./models');

router.get('/', function(req, res){
  models.title.findAll().then(function (title){
    res.render('index', {listItems: title});
  });
});
