import * as express from "express";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import * as path from 'path';

// Route imports
import indexRouter from './routes/index';
import CurrencyController from './controllers/api/currencyController';

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

useExpressServer(app, {
    routePrefix: "/api/v1",
    // register created express server in routing-controllers
    controllers: [
        CurrencyController
    ] // and configure it the way you need (controllers, validation, etc.)
});

// Base endpoints
app.use('/', indexRouter);

module.exports = app;
