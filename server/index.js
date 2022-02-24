// server/index.js

const express = require("express");
const cors = require('cors');
var vcRoutes = require('./vc-routes.js');
var apiRoutes = require('./api-routes.js');

require('dotenv').config()
const PORT = process.env.PORT || 3001;

const app = express();
var router = express.Router();

app.use(express.json()) ;
app.use(express.urlencoded({extended: true}));

app.use(cors())

app.use('/nodejs', vcRoutes);
app.use('/api', apiRoutes);



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
