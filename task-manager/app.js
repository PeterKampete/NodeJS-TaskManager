const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, function () {
      console.log(`Server listening on http://localhost:${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
