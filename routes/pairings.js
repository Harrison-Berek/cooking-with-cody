const express = require('express');
const router = express.Router();
const pairingsCtrl = require('../controllers/pairings');
const isLoggedIn = require('../config/auth');

router.post('recipes/:id/pairings', isLoggedIn, pairingsCtrl.create);
router.get('recipes/:id/pairings/new', isLoggedIn, pairingsCtrl.new);

module.exports = router;