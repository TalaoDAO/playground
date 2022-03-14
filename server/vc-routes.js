var express = require('express');
const cors = require('cors');

const multer = require('multer')

var vc_controller = require('./controllers/vc-controller.js');

const userService = require("./services/user-service");
const websockets = require('./websockets');
const queryString = require("query-string");


var router = express.Router();
const upload = multer()
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
var allowedOrigins = ['http://localhost:3000','https://playground.talao.co'];
router.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));



router.get("/test", vc_controller.test);
router.get("/discount-offer", vc_controller.discount_offer_get);
router.post("/discount-offer", upload.none(), vc_controller.discount_offer_post);
router.get("/learning/:uuid", vc_controller.learning_get);
router.post("/learning/:uuid", upload.none(), vc_controller.learning_post);
router.get("/employment/:uuid", vc_controller.employment_get);
router.post("/employment/:uuid", upload.none(), vc_controller.employment_post);
router.get("/student/:uuid", vc_controller.student_get);
router.post("/student/:uuid", upload.none(), vc_controller.student_post);
router.get("/email/:uuid", vc_controller.email_get);
router.post("/email/:uuid", upload.none(), vc_controller.email_post);
router.get("/authentication/:uuid", vc_controller.authentication_get);
router.post("/authentication/:uuid", upload.none(), vc_controller.authentication_post);


router.get("/user/:email", (req, res) => {

    (async () => {

        try {
            let user = await userService.getUser(req.params.email);

            if (user) {

                res.json(user.toJSON());
                return;
            } else {
                res.json({ message: 'User does not exist' });
                return;
            }
        } catch (error) {
            logger.error(error);
            res.json({ message: error });
        }

    })();
});


router.get("/wssend", (req, res) => {
    const [_path, params] = req.url?.split("?");
    const queryParams = queryString.parse(params);
    const challenge = queryParams.challenge;
    var message = queryParams.message;

    if (challenge) {
        if (!message)
            message = "Hello World from NodeJS server!";
        websockets.send(challenge, message);
        res.json("send");
        return;

    }

});


module.exports = router