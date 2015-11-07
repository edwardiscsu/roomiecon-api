/**
 * Created by Edward on 11/7/2015.
 */

var config = {
    dbUri : 'mongodb://roomiecon-api:roomiecon@ds045734.mongolab.com:45734/scsu-csci550-roomiecon',
    dbOptions : {
        server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
    }
}

module.exports = config;
