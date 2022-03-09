var express = require('express');
var router = express.Router();
const cors = require('cors');
const multer  = require('multer')
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, errors  } = format;
const requestService = require("./services/request-service");

const app = express();
const upload = multer()
app.use(express.json()) ;
app.use(express.urlencoded({extended: true}));
app.use(cors())



const logger =  createLogger({
    level: 'debug',
    format: combine(
        errors({ stack: true }),
        timestamp(),
        prettyPrint()
    ),
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new transports.File({ filename: 'error.log', level: 'error'}),
      new transports.File({ filename: 'combined.log'}),
    ],
  });

router.get("/", (req, res) => {
    logger.debug(req.url);

    res.json({ message: "Hello World from server!" });

});

router.get("/qr-url", (req, res) => {
    logger.debug(req.url);

    res.json({ url: "random_challenge" });

});

router.post('/login', upload.none(), (req, res) => {
    //TODO: implement JWK generation
    res.send({
        token: 'test123'
      });
});

router.post('/create-diploma', upload.none(), (req, res) => {
    logger.debug(req.body);

    (async() =>{
      try {
          let uuid= await requestService.createRequest(1,'diploma',req.body);
          logger.debug('generated uuid='+uuid)

          res.send({
            url: 'urn:uuid:'+uuid+'?issuer=did%3Aethr%3A0xee09654eedaa79429f8d216fa51a129db0f72250'
          });
      } catch (error) {
        logger.error(error);
        res.send({
          error: error.message
        });
      }

  })();

});

module.exports = router