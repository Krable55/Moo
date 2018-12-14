const express = require('express');
const db = require('./db');
const router = require('./routes.js');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

var port = 5000;
var app = express();
module.exports.app = app;

app.set('port', process.env.port || port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

app.use('/', router)
