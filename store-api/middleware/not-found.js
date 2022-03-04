const notFoundMiddleware = (req, res) => {
  return res.status(404).send("Route was not found");
};

module.exports = notFoundMiddleware;
