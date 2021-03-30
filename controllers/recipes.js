const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    show
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) { 
        res.render('recipes/index', {title: 'All Recipes', recipes});
    });
};

function newRecipe(req, res) {
    res.render('recipes/new', {title: "New Recipe"});
};

function create(req, res) {
    // req.body.glutenFree = !!req.body.glutenFree;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    const recipe = new Recipe(req.body);
    recipe.userAdding = req.user._id;
    recipe.save(function(err) {
      if (err) return redirect('/recipes/index');
      res.redirect('/recipes/index');
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', { title: 'Recipe Details', recipe});
    })
}
