var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyounode", function(err, db) {
    var users = db.collection("users");
    users.update({
        "username": "tinatime"
    }, {
        $set: {
            "age": 40
        }
    }, function() {
        db.close();
    });
});
