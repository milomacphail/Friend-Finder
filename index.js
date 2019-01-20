//require express
const express = require('express');
const routes = require('./routes/api');

//create express app
const app = express();

//access router
app.use('/api', routes);

//set port
const port = process.env.PORT || 5000;

//listen for app
app.listen(port, () => console.log(`Server running on port ${port}`));
