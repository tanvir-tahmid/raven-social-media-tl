const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect();
    }
    
    connect() {
        mongoose.connect("mongodb+srv://tanvir:H3PqnxIppMkfCJGF@raven-social-media-clus.1dtzn.mongodb.net/ravendb?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();