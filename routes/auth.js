/** Created by Edward on 10/27/2015. */

var express = require('express');
var router = express.Router();

/* POST a login request. */
router.post('/login', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;