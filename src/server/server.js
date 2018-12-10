var express = require('express');
var db = require('./db');

var app = express();
module.exports.app = app;

app.set('port', 3000);
app.use(parser.json());