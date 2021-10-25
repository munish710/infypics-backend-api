const notFound = (req, res) => {
  return res.status(404).send("Route doesn't exist on the server");
};

module.exports = notFound;
