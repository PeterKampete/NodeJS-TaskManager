const { customApiError } = require("../errors/customError");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customApiError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong" });
};

module.exports = errorHandlerMiddleware;
