'use strict';

const express = require('express');

const { sendQrcode } = require('./services/DIDKitService');

const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.post('/qrcode', (req, res) => sendQrcode(req, res));

module.exports = router;
