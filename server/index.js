// server/index.js

const express = require("express");
const cors = require('cors');
var vcRoutes = require('./vc-routes.js');
var apiRoutes = require('./api-routes.js');
const winston = require('winston')
const websockets = require('./websockets');
const queryString = require("query-string");


require('dotenv').config()
const PORT = process.env.PORT || 3001;

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
var router = express.Router();
const app = express();

app.use('/nodejs', vcRoutes);
app.use('/api', apiRoutes);
app.use(cors());

const server = app.listen(PORT, () => {
  logger.info(`Server listening on ${PORT}`)
})

websockets(server)

