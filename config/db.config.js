const mongoose = require("mongoose");

function connectToDb() {
  return mongoose.connect("mongodb://localhost:270717/labRooms", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

module.exports = connectToDb;
