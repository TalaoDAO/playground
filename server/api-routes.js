var express = require('express');
var router = express.Router();
const WebSocket=require("ws");
const cors = require('cors');
const multer = require('multer')

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, errors } = format;
const requestService = require("./services/request-service");
const userService = require("./services/user-service");

const logger = createLogger({
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
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

const upload = multer()
router.use(cors({
  origin: 'http://localhost:3000','https://playground.talao.co/'
}));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


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

  (async () => {
    try {
      let uuid = await requestService.createRequest(1, 'diploma', req.body);

      logger.debug('generated uuid=' + uuid)

      res.send({
        url: uuid + '?issuer=did%3Aethr%3A0xee09654eedaa79429f8d216fa51a129db0f72250'
      });
      return;
    } catch (error) {
      logger.error(error);
      res.send({
        error: error.message
      });
    }

  })();

});


router.post('/create-student', upload.none(), (req, res) => {
  logger.debug(req.body);

  (async () => {
    try {
      let uuid = await requestService.createRequest(1, 'student', req.body);

      logger.debug('generated uuid=' + uuid)

      res.send({
        url: uuid + '?issuer=did%3Aethr%3A0xee09654eedaa79429f8d216fa51a129db0f72250'
      });
      return;
    } catch (error) {
      logger.error(error);
      res.send({
        error: error.message
      });
    }

  })();

});

router.post('/create-employer', upload.none(), (req, res) => {
  logger.debug(req.body);

  (async () => {
    try {
      let uuid = await requestService.createRequest(1, 'employer', req.body);

      logger.debug('generated uuid=' + uuid)

      res.send({
        url: uuid + '?issuer=did%3Aethr%3A0xee09654eedaa79429f8d216fa51a129db0f72250'
      });
      return;
    } catch (error) {
      logger.error(error);
      res.send({
        error: error.message
      });
    }

  })();

});


router.post('/create-authentication', upload.none(), (req, res) => {
  logger.debug(req.body);

  (async () => {
    try {
      let uuid = await requestService.createRequest(1, 'authentication', req.body);

      logger.debug('generated uuid=' + uuid)

      res.send({
        url: uuid + '?issuer=did%3Aethr%3A0xee09654eedaa79429f8d216fa51a129db0f72250'
      });
      return;
    } catch (error) {
      logger.error(error);
      res.send({
        error: error.message
      });
    }

  })();

});





router.post('/create-user', upload.none(), (req, res) => {
  logger.debug(req.body);

  (async () => {
    try {
      let email = req.body.email;
      if (!email) {
        logger.error("Email not provided");
        res.send({
          error: "Email not provided"
        });
        return;
      }

      let user = await userService.getUser(email)
      if (user && user.active) {
        logger.error("User already exists");
        res.send({
          active: 1,
          challenge: user.challenge,
          error: "User already exists"
        });
        return;

      } else {
        if (!user) {
          user = await userService.createUser(email, req.body.givenName, req.body.familyName);
          logger.debug('generated user id=' + user.id)
        }
        res.send({
          user_id: user.id
        });
        return;
      }

    } catch (error) {
      logger.error(error);
      res.send({
        error: error.message
      });
      return;
    }

  })();

});

router.post('/validate-user', upload.none(), (req, res) => {
  logger.debug(req.body);

  (async () => {
    try {
      let email = req.body.email;
      if (!email) {
        logger.error("Email not provided");
        res.send({
          error: "Email not provided"
        });
        return;
      }

      let existing = await userService.getUser(email)
      if (!existing) {
        logger.error("User does not exist");
        res.send({
          error: "User does not exist"
        });
        return;
      }
      let userFound = await userService.validateUser(email, req.body.code);

      if (!userFound) {
        logger.error("User does not exist or code doesn't match.");
        res.send({
          error: "User does not exist or code doesn't match."
        });
        return;
      }

      userFound.active = true;
      userFound.save();

      logger.debug('activated user id=' + userFound.id)

      res.send({
        user_id: userFound.id,
        challenge: userFound.challenge
      });
      return;
    } catch (error) {
      logger.error(error);
      res.send({
        error: error.message
      });
    }

  })();

});

module.exports = router