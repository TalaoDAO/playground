var express = require('express');
var router = express.Router();

var vc_controller = require('./controllers/vc-controller.js');


router.get("/test", vc_controller.test);
router.get("/discount-offer", vc_controller.discount_offer_get);
router.post("/discount-offer", vc_controller.discount_offer_post);


module.exports = router