const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect();
    }
    
    connect() {
        mongoose.connect("mongodb://tanvir:H3PqnxIppMkfCJGF@raven-social-media-clus-shard-00-00.1dtzn.mongodb.net:27017,raven-social-media-clus-shard-00-01.1dtzn.mongodb.net:27017,raven-social-media-clus-shard-00-02.1dtzn.mongodb.net:27017/ravendb?ssl=true&replicaSet=atlas-9bvpn8-shard-0&authSource=admin&retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();