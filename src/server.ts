import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import logging from './config/logging'
import config from './config/config'
import router from './routes/sample'

const NAMESPACE = 'Server'  // What we use to determine where logs are coming from
const app = express()

/** Require the routes **/
const sampleRoutes = require('./routes/sample')

/**  Logging the request  **/
app.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP = [${req.socket.remoteAddress}]`)

  res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP = [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`)
  })
  next() // need to call the next function so request will pass through our middleware without stopping here
})

/** Parse the request */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/** Rules of our API */
app.use((req, res, next) => {
  // When going into production mode, you must change * to specific port
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }

  next();
});

/** Routes **/
app.use('/sample', sampleRoutes)

/** Error Handling **/
app.use((req, res, next) => {
  const error = new Error('Not found');

  res.status(404).json({
      message: error.message
  });
});

/** Create the server **/
const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));