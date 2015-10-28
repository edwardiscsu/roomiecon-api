/** Created by Edward on 10/27/2015. */

var express = require('express');
var router = express.Router();

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

module.exports = router;