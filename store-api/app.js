const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors")

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

const connectDB = require("./db/connect");
const productsRouter = require('./routes/products')

//Middleware
app.use(express.json());

//routes

app.use("/api/v1/products", productsRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
