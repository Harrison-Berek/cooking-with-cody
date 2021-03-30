const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create
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
    console.log(recipe.name);
    console.log(recipe.ingredients);
    console.log(recipe.instructions);
    console.log(recipe.diet);
    console.log(recipe.glutenFree);
    recipe.save(function(err) {
      if (err) return redirect('/recipes/index');
      res.redirect('/recipes/index');
    });
}
