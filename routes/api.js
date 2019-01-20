//require express
const express = require('express');
const router = express.Router();


//get request to see all nearby friends
router.get('/friends', function(req, res){
   console.log('GET request made');
   res.send({type: 'GET'});
});

//add new friend
router.post('/friends', function(req, res){
   console.log('GET request made');
   res.send({type: 'POST'});
});

//edit information about friend
router.get('/friends/:id', function(req, res){
   console.log('Information updated successfully');
   res.send({type: 'PUT'});
});

//delete friend
router.get('/friends/:id', function(req, res){
   console.log(`Friend deleted`);
   res.send({type: 'DELETE'});
});

module.exports =  router;