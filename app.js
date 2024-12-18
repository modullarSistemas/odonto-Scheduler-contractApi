var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var generateGeneralPracticionerContract = require('./routes/GenerateGeneralPracticionerContract/pdf-generator');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/GenerateGeneralPracticionerContract', generateGeneralPracticionerContract);

module.exports = app;