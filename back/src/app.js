'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.disable('x-powered-by');

module.exports = app;
