import express = require('express');
import bodyParser = require("body-parser");
import cors = require("cors");
import {Widgets} from "./models";
import passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '815735416365-a3vvu0e4avquai6sranjqbu9pbpqegur.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '7fOru3skiJ3DVrdS1chErlUn';
const app = express();

const corsOptions = {
    origin: ["http://localhost:4200", "https://www.googleapis.com/auth/plus.login"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

/**
 * Имитация базы
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
    console.log('accessToken', accessToken, 'refreshToken', refreshToken, 'profile', profile, 'done',  done)
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

/**
 * получение виджетов для определенного юзера
 * */
app.get('/widgets/user', (req, res) => {
    res.send(usersWidgets);
});

/**
 * обновление виджета
 * */
app.put('/put', (req, res) => {
    res.send('work put')
});

/**
 * создание виджета
 * */
app.delete('/delete-widgets', (req, res) => {
    res.send('work post')
});

/**
 * удаление виджета
 * */
app.delete('/delete', (req, res) => {
    res.send('work delete')
});

/**
 * получение виджетов для меню
 * */
app.get('/widgets', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.send(widgets);
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});