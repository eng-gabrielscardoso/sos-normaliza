const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('../routes/routes');
const authStrategies = require('../services/auth/authStrategies');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('../../redis/denylist-access-token').connect();
require('../../redis/allowlist-refresh-token').connect();

app.use(routes);

module.exports = app;
