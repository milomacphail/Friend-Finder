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
router.put('/friends/:id', function(req, res, next){
   console.log('Information updated successfully');
   res.send({type: 'PUT'});
});

//delete friend
router.delete('/friends/:id', function(req, res, next){
   Friend.findByIdAndRemove({_id:req.params.id}).then(function(friend){
      res.send(friend);
   });
});

module.exports =  router;