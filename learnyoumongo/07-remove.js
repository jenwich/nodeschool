var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyounode", function(err, db) {
    var collection = db.collection(process.argv[2]);
    collection.remove({
        _id: process.argv[3]
    }, function(err) {
        db.close();
    });
});
