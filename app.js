const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const PORT = 9000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, function () {
      console.log(`Server listening on http://localhost:${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
