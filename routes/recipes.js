const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

// GET /recipes index (All recipes) 
router.get('/', recipesCtrl.index);

module.exports = router;

// GET /recipes/new new recipe form
// router.get('/new', isLoggedIn, recipeCtrl.new);
// Get /recipes/show show user recipes
// router.get('/:id', isLoggedIn, recipeCtrl.show);
//POST /recipes create new recipe
// router.post('/', isLoggedIn, recipeCtrl.create);