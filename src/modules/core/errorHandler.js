function apiNotFound(req, res) {
  res.status(400).send('Api not found');
}

function errorHandler(app) {
  app.use(apiNotFound);
}

module.exports = errorHandler;
