//require express
const express = require('express');
const router = express.Router();
const Friend = require('../models/friends');


//get request to see all nearby friends
router.get('/friends', function(req, res){
   console.log('GET request made');
   res.send({type: 'GET'});
});

//add new friend
router.post('/friends', function(req, res, next){
   Friend.create(req.body).then(function(friend){
      res.send(friend);
   }).catch(next)
   
});

//edit information about friend
router.get('/friends/:id', function(req, res, next){
   console.log('Information updated successfully');
   res.send({type: 'PUT'});
});

//delete friend
router.get('/friends/:id', function(req, res, next){
   console.log(`Friend deleted`);
   res.send({type: 'DELETE'});
});

module.exports =  router;