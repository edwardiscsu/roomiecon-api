/** Created by Edward on 10/27/2015. */

var express = require('express');
var router = express.Router();

var config = require('../config');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var mongooseUri = uriUtil.formatMongoose(config.dbUri);

var models = require('../models');

/* CORS handler. IMPORTANT! Make sure it's there for all your routes! */
router.all('/login', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    res.header('Content-Type', 'application/json');
    next();
});

/* POST a login request. */
router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    mongoose.connect(mongooseUri, config.dbOptions);
    var db = mongoose.connection;
    db.on('error', function() {
        console.error.bind(console, 'POST /login db connection error');
        res.status(500).end();
    });
    db.once('open', function(callback) {
        res.format({
            'application/json' : function() {
                var User = models('user');

                User.findOne({ 'email': email, 'password': password }, 'name email',
                    function(err, user) {
                        mongoose.connection.close();

                        if (err) res.status(500).end();
                        if (user != null) {
                            res.status(200).send({
                                name: user.name,
                                email: user.email
                            });
                        } else {
                            res.status(401).end();
                        }
                });
            },
            'default' : function() {
                mongoose.connection.close();
                res.status(406).send('Content-Type Required');
            }
        });
    });
});

router.all('/signup', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    res.header('Content-Type', 'application/json');
    next();
});

/* POST a signup request. */
router.post('/signup', function(req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var zip = req.body.zipCode

    mongoose.connect(mongooseUri, config.dbOptions);
    var db = mongoose.connection;
    db.on('error', function() {
        console.error.bind(console, 'POST /login db connection error');
        res.status(500).end();
    });
    db.once('open', function(callback) {
        res.format({

            'application/json' : function() {
                var User = models('user');

                var newUser = new User({
                    name: {
                        tag: username
                    },
                    email: email,
                    password: password,
                    zipCode: zip
                });


                newUser.save(
                    function (err, user) {
                        mongoose.connection.close();
                        if (err) res.status(500).end();
                        if (user != null) {
                            res.status(200).send({
                                username: user.username,
                                email: user.email,
                                password: user.password,
                                zipCode: user.zipCode
                            });
                        } else {
                            res.status(500).end();
                        }
                    });
            },
            'default' : function() {
                mongoose.connection.close();
                res.status(406).send('Content-Type Required');
            }
        });
    });
});

module.exports = router;