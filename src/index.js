const express = require('express');
const errorHandler = require('./modules/core/errorHandler');

const parseResponse = require('./modules/core/parseResponse');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const dbConnect = require('./modules/core/db');

const app = express();
const PORT = process.env.PORT || 3000;

dbConnect();
parseResponse(app);
cors(app);
routes(app);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
