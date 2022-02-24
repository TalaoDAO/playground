var express = require('express');
var router = express.Router();


const cors = require('cors');

router.get("/", (req, res) => {
    console.log(req.url);
    
    res.json({ message: "Hello World from server!" });
    
});

module.exports = router