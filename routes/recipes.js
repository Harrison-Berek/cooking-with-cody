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
// GET /recipe edit
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit);
// PUT /recipe update
router.put('/:id', isLoggedIn, recipesCtrl.update);
// DELETE /recipe
router.delete('/:id', isLoggedIn, recipesCtrl.delete);


module.exports = router;
