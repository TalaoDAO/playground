var express = require('express');
var router = express.Router();

var vc_controller = require('./controllers/vc-controller.js');


router.get("/test", vc_controller.test);
router.get("/discount-offer", vc_controller.discount_offer_get);
router.post("/discount-offer", vc_controller.discount_offer_post);
router.get("/learning", vc_controller.learning_get);
router.post("/learning", vc_controller.learning_post);
router.get("/employment", vc_controller.employment_get);
router.post("/employment", vc_controller.employment_post);
router.get("/student", vc_controller.student_get);
router.post("/student", vc_controller.student_post);
router.get("/email", vc_controller.email_get);
router.post("/email", vc_controller.email_post);


module.exports = router