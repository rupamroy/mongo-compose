var mongoData = require("./mongoData");

mongoData.init(function (db) {
    mongoData.insert(db, function () {
        mongoData.getData(db, function (data) {
            data.forEach(function (e) {
                console.log(e.name);
            });
            mongoData.dispose(db);
        });
    });
});

