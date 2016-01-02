var MongoClient = require('mongodb').MongoClient;


module.exports = {
    init: init,
    insert: insert,
    getData: getData,
    dispose: dispose
}

function init(callback) {
    var url = 'mongodb://mongo:27017/employeeDb';
    MongoClient.connect(url, function (err, employeeDb) {
        console.log("Connected correctly to server.");
        callback(employeeDb);
    });
}

function insert(db, callback) {
    db.collection('employees').insert([
        {"name": "Rupam Roy"},
        {"name": "Amit Swami"},
        {"name": "Chintan Patel"}
    ], function (err, result) {
        callback();
    });
}

function getData(db, callback) {
    var res = [];
    var cursor = db.collection('employees').find();
    cursor.each(function (err, doc) {
        if (doc != null) {
            res.push(doc);
        }
        else {
            callback(res);
        }
    });
}

function dispose(db) {
    db.close();
}