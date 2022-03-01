var express = require('express');
var router = express.Router();


router.get("/", (req, res) => {
    console.log(req.url);

    res.json({ message: "Hello World from server!" });

});

router.get("/qr-url", (req, res) => {
    console.log(req.url);

    res.json({ url: "random_challenge" });

});

router.post('/login', (req, res) => {
    //TODO: implement JWK generation
    res.send({
        token: 'test123'
      });
});

module.exports = router