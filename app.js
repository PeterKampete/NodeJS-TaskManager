const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const PORT = 9000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, function () {
      console.log(`listening on http://localhost:${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
