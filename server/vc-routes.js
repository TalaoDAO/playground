var express = require('express');
const cors = require('cors');

const multer  = require('multer')

var vc_controller = require('./controllers/vc-controller.js');

const userService = require("./services/user-service");

var router = express.Router();
const app = express();
const upload = multer()
app.use(express.json()) ;
app.use(express.urlencoded({extended: true}));
app.use(cors())

router.get("/test", vc_controller.test);
router.get("/discount-offer", vc_controller.discount_offer_get);
router.post("/discount-offer", upload.none(), vc_controller.discount_offer_post);
router.get("/learning/:uuid", vc_controller.learning_get);
router.post("/learning/:uuid", upload.none(), vc_controller.learning_post);
router.get("/employment", vc_controller.employment_get);
router.post("/employment", upload.none(), vc_controller.employment_post);
router.get("/student", vc_controller.student_get);
router.post("/student", upload.none(), vc_controller.student_post);
router.get("/email/:uuid", vc_controller.email_get);
router.post("/email/:uuid", upload.none(), vc_controller.email_post);


router.get("/user/:email", (req, res) => {

    (async () => {
  
        try{
            let user = await userService.getUser(req.params.email);

            if(user){

                res.json(user.toJSON());
                return;
            }else{
                res.json({ message: 'User does not exist' });
                return;
            }
        } catch (error) {
            logger.error(error);
            res.json({ message: error });
        }
  
  })();
});
  


module.exports = router