//require express
const express = require('express');

//create express app
const app = express();

//set port
const port = process.env.PORT || 5000;

//listen for app
app.listen(port, () => console.log(`Server running on port ${port}`));
