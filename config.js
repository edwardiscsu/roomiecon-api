/**
 * Created by Edward on 11/7/2015.
 */

var config = {
    dbUri : 'mongodb://roomiecon-api:roomiecon@ds045734.mongolab.com:45734/scsu-csci550-roomiecon',
    dbOptions : {
        server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
    },

    mapTestData0 : {
        "nodes":[
            {"name":"center", "group":1},
            {"name":"city A", "group":2},
            {"name":"city B", "group":3},
            {"name":"city C", "group":4},
            {"name":"city D", "group":5},
            {"name":"city E", "group":6},
            {"name":"city F", "group":7},
            {"name":"city G", "group":8},

            {"name":"person A.1", "group":2},
            {"name":"person A.2", "group":2},
            {"name":"person A.3", "group":2},
            {"name":"person A.4", "group":2},
            {"name":"person A.5", "group":2},

            {"name":"person B.1", "group":3},
            {"name":"person B.2", "group":3},

            {"name":"person C.1", "group":4},
            {"name":"person C.2", "group":4},
            {"name":"person C.3", "group":4},
            {"name":"person C.4", "group":4},
            {"name":"person C.5", "group":4},

            {"name":"person D.1", "group":5},

            {"name":"person E.1", "group":6},
            {"name":"person E.2", "group":6},
            {"name":"person E.3", "group":6},
            {"name":"person E.4", "group":6},
            {"name":"person E.5", "group":6},
            {"name":"person E.6", "group":6},
            {"name":"person E.7", "group":6},

            {"name":"person F.1", "group":7},
            {"name":"person F.2", "group":7},
            {"name":"person F.3", "group":7},

            {"name":"person G.1", "group":8},
            {"name":"person G.2", "group":8}
        ],
        "links":[
            {"source":0,"target":1, "value":1},
            {"source":0,"target":2, "value":2},
            {"source":0,"target":3, "value":3},
            {"source":0,"target":4, "value":4},
            {"source":0,"target":5, "value":5},
            {"source":0,"target":6, "value":6},
            {"source":0,"target":7, "value":7},

            {"source":1,"target":8, "value":1},
            {"source":1,"target":9, "value":1},
            {"source":1,"target":10, "value":1},
            {"source":1,"target":11, "value":1},
            {"source":1,"target":12, "value":1},

            {"source":2,"target":13, "value":2},
            {"source":2,"target":14, "value":2},

            {"source":3,"target":15, "value":3},
            {"source":3,"target":16, "value":3},
            {"source":3,"target":17, "value":3},
            {"source":3,"target":18, "value":3},
            {"source":3,"target":19, "value":3},

            {"source":4,"target":20, "value":4},

            {"source":5,"target":21, "value":5},
            {"source":5,"target":22, "value":5},
            {"source":5,"target":23, "value":5},
            {"source":5,"target":24, "value":5},
            {"source":5,"target":25, "value":5},
            {"source":5,"target":26, "value":5},
            {"source":5,"target":27, "value":5},

            {"source":6,"target":28, "value":6},
            {"source":6,"target":29, "value":6},
            {"source":6,"target":30, "value":6},

            {"source":7,"target":31, "value":7},
            {"source":7,"target":32, "value":7}
        ]
    },
    mapTestData1 : {
        "nodes":[
            {"name":"center", "group":1},
            {"name":"city A", "group":2},
            {"name":"city B", "group":3},
            {"name":"city C", "group":4},
            {"name":"city D", "group":5},
            {"name":"city E", "group":6},
            {"name":"city F", "group":7},
            {"name":"city G", "group":8},

            {"name":"person A.1", "group":2},
            {"name":"person A.2", "group":2},
            {"name":"person A.3", "group":2},
            {"name":"person A.4", "group":2},

            {"name":"person B.1", "group":3},
            {"name":"person B.2", "group":3},

            {"name":"person C.1", "group":4},
            {"name":"person C.2", "group":4},
            {"name":"person C.3", "group":4},
            {"name":"person C.4", "group":4},

            {"name":"person D.1", "group":5},

            {"name":"person E.1", "group":6},
            {"name":"person E.2", "group":6},
            {"name":"person E.3", "group":6},
            {"name":"person E.4", "group":6},
            {"name":"person E.5", "group":6},
            {"name":"person E.6", "group":6},

            {"name":"person F.1", "group":7},
            {"name":"person F.2", "group":7},

            {"name":"person G.1", "group":8},
            {"name":"person G.2", "group":8}
        ],
        "links":[
            {"source":0,"target":1, "value":1},
            {"source":0,"target":2, "value":2},
            {"source":0,"target":3, "value":3},
            {"source":0,"target":4, "value":4},
            {"source":0,"target":5, "value":5},
            {"source":0,"target":6, "value":6},
            {"source":0,"target":7, "value":7},

            {"source":1,"target":8, "value":1},
            {"source":1,"target":9, "value":1},
            {"source":1,"target":10, "value":1},
            {"source":1,"target":11, "value":1},

            {"source":2,"target":12, "value":2},
            {"source":2,"target":13, "value":2},

            {"source":3,"target":14, "value":3},
            {"source":3,"target":15, "value":3},
            {"source":3,"target":16, "value":3},
            {"source":3,"target":17, "value":3},

            {"source":4,"target":18, "value":4},

            {"source":5,"target":19, "value":5},
            {"source":5,"target":20, "value":5},
            {"source":5,"target":21, "value":5},
            {"source":5,"target":22, "value":5},
            {"source":5,"target":23, "value":5},
            {"source":5,"target":24, "value":5},

            {"source":6,"target":25, "value":6},
            {"source":6,"target":26, "value":6},

            {"source":7,"target":27, "value":7},
            {"source":7,"target":28, "value":7}
        ]
    },
    mapTestData2 : {
        "nodes":[
            {"name":"center", "group":1},
            {"name":"city A", "group":2},
            {"name":"city B", "group":3},
            {"name":"city C", "group":4},
            {"name":"city D", "group":5},
            {"name":"city E", "group":6},
            {"name":"city F", "group":7},
            {"name":"city G", "group":8},

            {"name":"person A.1", "group":2},
            {"name":"person A.2", "group":2},

            {"name":"person B.1", "group":3},
            {"name":"person B.2", "group":3},

            {"name":"person C.1", "group":4},
            {"name":"person C.2", "group":4},
            {"name":"person C.3", "group":4},

            {"name":"person D.1", "group":5},

            {"name":"person E.1", "group":6},
            {"name":"person E.2", "group":6},
            {"name":"person E.3", "group":6},
            {"name":"person E.4", "group":6},
            {"name":"person E.5", "group":6},

            {"name":"person F.1", "group":7},
            {"name":"person F.2", "group":7},

            {"name":"person G.1", "group":8},
            {"name":"person G.2", "group":8}
        ],
        "links":[
            {"source":0,"target":1, "value":1},
            {"source":0,"target":2, "value":2},
            {"source":0,"target":3, "value":3},
            {"source":0,"target":4, "value":4},
            {"source":0,"target":5, "value":5},
            {"source":0,"target":6, "value":6},
            {"source":0,"target":7, "value":7},

            {"source":1,"target":8, "value":1},
            {"source":1,"target":9, "value":1},

            {"source":2,"target":10, "value":2},
            {"source":2,"target":11, "value":2},

            {"source":3,"target":12, "value":3},
            {"source":3,"target":13, "value":3},
            {"source":3,"target":14, "value":3},

            {"source":4,"target":15, "value":4},

            {"source":5,"target":16, "value":5},
            {"source":5,"target":17, "value":5},
            {"source":5,"target":18, "value":5},
            {"source":5,"target":19, "value":5},
            {"source":5,"target":20, "value":5},

            {"source":6,"target":21, "value":6},
            {"source":6,"target":22, "value":6},

            {"source":7,"target":23, "value":7},
            {"source":7,"target":24, "value":7}
        ]
    },
    mapTestData3 : {
        "nodes":[
            {"name":"center", "group":1},
            {"name":"city A", "group":2},
            {"name":"city B", "group":3},
            {"name":"city C", "group":4},
            {"name":"city D", "group":5},
            {"name":"city E", "group":6},
            {"name":"city F", "group":7},
            {"name":"city G", "group":8},

            {"name":"person A.1", "group":2},

            {"name":"person B.1", "group":3},
            {"name":"person B.2", "group":3},

            {"name":"person C.1", "group":4},
            {"name":"person C.2", "group":4},

            {"name":"person D.1", "group":5},

            {"name":"person E.1", "group":6},
            {"name":"person E.2", "group":6},

            {"name":"person F.1", "group":7},

            {"name":"person G.1", "group":8},
            {"name":"person G.2", "group":8}
        ],
        "links":[
            {"source":0,"target":1, "value":1},
            {"source":0,"target":2, "value":2},
            {"source":0,"target":3, "value":3},
            {"source":0,"target":4, "value":4},
            {"source":0,"target":5, "value":5},
            {"source":0,"target":6, "value":6},
            {"source":0,"target":7, "value":7},

            {"source":1,"target":8, "value":1},

            {"source":2,"target":9, "value":2},
            {"source":2,"target":10, "value":2},

            {"source":3,"target":11, "value":3},
            {"source":3,"target":12, "value":3},

            {"source":4,"target":13, "value":4},

            {"source":5,"target":14, "value":5},
            {"source":5,"target":15, "value":5},

            {"source":6,"target":16, "value":6},

            {"source":7,"target":17, "value":7},
            {"source":7,"target":18, "value":7}
        ]
    }
}

module.exports = config;
