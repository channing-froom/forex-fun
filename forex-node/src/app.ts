import express from "express";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import * as path from 'path';

let cors = require('cors');

// Route imports
import indexRouter from './routes/index';
import CurrencyController from './controllers/api/currencyController';

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

// Enable default cors : lack on security
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up api controllers and default routes
useExpressServer(app, {
    routePrefix: "/api/v1",
    // register created express server in routing-controllers
    controllers: [
        CurrencyController
    ] // and configure it the way you need (controllers, validation, etc.)
});

// Base endpoints
// Express base routing
app.use('/', indexRouter);

module.exports = app;
