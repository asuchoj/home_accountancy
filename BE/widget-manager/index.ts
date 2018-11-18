import express = require('express');
import bodyParser = require("body-parser");
import cors = require("cors");
import {Widgets} from "./models";
import passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '472973084132-kkp6gdcj80d2s8kn2mubc6hhu17ufcfg.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '9cpYqxvYPCYt8jaW3cbHvNxt';
const app = express();

const corsOptions = {
    origin: ["http://localhost:4200"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

/**
 * base imitation
 * */
const widgets: Array<Widgets> = [
    {
        name: 'виджет 1',
        color: 'red',
        id: 1
    },
    {
        name: 'виджет 2',
        color: 'green',
        id: 2
    },
    {
        name: 'виджет 3',
        color: 'yellow',
        id: 3
    }
];

let usersWidgets: any = {
    widgets: [{
        id: 1
    }, {
        id: 3
    }]
};

passport.use(new GoogleStrategy({clientID: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET, callbackURL: "http://localhost:4200"}, (accessToken, refreshToken, profile, done) => {
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}), (req, res) => {
    console.log(req, res)
});

/**
 * get widgets for a specific user
 * */
app.get('/widgets/user', (req, res) => {
    res.send(usersWidgets);
});

/**
 * update widget
 * */
app.put('/put', (req, res) => {
    res.send('work put')
});

/**
 * create widget
 * */
app.delete('/delete-widgets', (req, res) => {
    res.send('work post')
});

/**
 * delete widget
 * */
app.delete('/delete', (req, res) => {
    res.send('work delete')
});

/**
 * get widgets menu
 * */
app.get('/widgets',(req, res) => {
    res.send(widgets);
});

app.listen(80, function () {
    console.log('Example app listening!');
});