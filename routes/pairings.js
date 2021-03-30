const express = require('express');
const router = express.Router();
const pairingsCtrl = ('../controllers/pairings');
const isLoggedIn = require('../config/auth');

router.get('recipes/:id/pairings/new', isLoggerIn, pairingsCtrl.new);
router.post('recipes/:id/pairings', isLoggerIn, pairingsCtrl.create);