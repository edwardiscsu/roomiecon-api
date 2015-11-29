/**
 * Created by Edward on 11/29/2015.
 */

var express = require('express');
var router = express.Router();

var config = require('../config');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var mongooseUri = uriUtil.formatMongoose(config.dbUri);

var models = require('../models');

router.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    res.header('Content-Type', 'application/json');
    next();
});

router.get('/', function(req, res, next){
    mongoose.connect(mongooseUri, config.dbOptions);
    var db = mongoose.connection;
    db.on('error', function() {
        console.error.bind(console, 'GET search/ db connection error');
        res.status(500).end();
    });
    db.once('open', function(callback) {
        res.format({
            'application/json' : function() {
                mongoose.connection.close();
                res.status(200).send(config.mapTestData);
            },
            'default' : function() {
                mongoose.connection.close();
                res.status(406).send('Content-Type Required');
            }
        });
    });
});

module.exports = router;