/** Created by Edward on 10/27/2015. */

var express = require('express');
var router = express.Router();

/* CORS handler. IMPORTANT! Make sure it's there for all your routes! */
router.all('/login', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});

/* POST a login request. */
router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    res.setHeader('Content-Type', 'application/json');
    res.format({
        'application/json' : function() {
            res.status(200).send({
                status: true,
                email: email
            });
        },
        'default' : function() {
            res.status(406).send('Content-Type Required');
        }
    });
});

router.all('/signup', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});

/* POST a login request. */
router.post('/signup', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    res.setHeader('Content-Type', 'application/json');
    res.format({
        'application/json' : function() {
            res.status(200).send({
                status: true,
                email: email
            });
        },
        'default' : function() {
            res.status(406).send('Content-Type Required');
        }
    });
});

module.exports = router;