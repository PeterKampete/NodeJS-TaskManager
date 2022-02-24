const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Kampete:delpiero676073496@nodeexpressprojects.ci7vc.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;