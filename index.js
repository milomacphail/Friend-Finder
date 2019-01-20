//require directories
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const routes = require('./routes/api');

//create express app
const app = express();

app.use(bodyParser.json());

//access router
app.use('/api', routes);

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db)
.then(()=>console.log("Connected to MongoDB"))
.catch(err => console.log(err));

//set port
const port = process.env.PORT || 5000;

//listen for app
app.listen(port, () => console.log(`Server running on port ${port}`));
