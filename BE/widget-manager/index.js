"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
var app = express();
/**
 * Имитация базы
 * */
var widgets = [
    {
        tag: 'red-widget',
        name: 'виджет 1',
        color: 'red',
        id: 1
    },
    {
        tag: 'green-widget',
        name: 'виджет 2',
        color: 'green',
        id: 2
    },
    {
        tag: 'yellow-widget',
        name: 'виджет 3',
        color: 'yellow',
        id: 3
    }
];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
/**
 * получение виджетов
 * */
app.get('/widgets', function (req, res) {
    res.send(widgets);
});
/**
 * обновление виджета
 * */
app.put('/put', function (req, res) {
    res.send('work put');
});
/**
 * создание виджета
 * */
app.delete('/delete-widgets', function (req, res) {
    res.send('work post');
});
/**
 * удаление виджета
 * */
app.delete('/delete', function (req, res) {
    res.send('work delete');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
