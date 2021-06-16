const notFound = (req, res, next) => {
  res.status(404).send("Route doesn't exist");
};

module.exports = notFound;
