const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

// GET /recipes index (All recipes) 
router.get('/index', recipesCtrl.index);
// GET /recipes/new new recipe form
router.get('/new', isLoggedIn, recipesCtrl.new);

module.exports = router;

// Get /recipes/show show user recipes
// router.get('/:id', isLoggedIn, recipesCtrl.show);
//POST /recipes create new recipe
// router.post('/', isLoggedIn, recipesCtrl.create);