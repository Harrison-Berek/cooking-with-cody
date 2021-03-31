const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');
const pairingsCtrl = require('../controllers/pairings');

// GET /recipes index (All recipes) 
router.get('/index', recipesCtrl.index);
// GET /recipes/new new recipe form
router.get('/new', isLoggedIn, recipesCtrl.new);
//POST /recipes create new recipe
router.post('/index', isLoggedIn, recipesCtrl.create);
// Get /recipes/show show user recipes
router.get('/:id', isLoggedIn, recipesCtrl.show);

//Need Delete and Update


router.post('recipes/:id/pairings', isLoggedIn, pairingsCtrl.create);

router.get('/:id/pairings/new', isLoggedIn, pairingsCtrl.new);


module.exports = router;
