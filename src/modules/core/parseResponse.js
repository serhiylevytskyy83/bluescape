const bodyParser = require('body-parser');

function parseResponse(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}

module.exports = parseResponse;
