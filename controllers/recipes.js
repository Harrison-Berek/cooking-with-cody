const Pairing = require('../models/pairing');
const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    update,
    delete: deleteRecipe
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) { 
        res.render('recipes/index', {title: 'All Recipes', recipes});
    });
};

function newRecipe(req, res) {
    res.render('recipes/new', {title: "New Recipe"});
};

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    const recipe = new Recipe(req.body);
    recipe.userRecommending = req.user._id;
    recipe.save(function(err) {
      if (err) return redirect('/recipes/index');
      res.redirect('/recipes/index');
    });
};


function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        Pairing.find({recipe: recipe._id}, function(err, pairings) {
        res.render('recipes/show', { title: 'Recipe Details', recipe, pairings});
        });
    });
};

function update(req, res) {
    Recipe.findById(req.params.id, function(err, recipe){
        Object.assign(recipe, req.body);
        recipe.save(function(err) {
            res.redirect(`/recipe/${recipe._id}`)
        })
    })
}

function deleteRecipe(req, res){
    Recipe.findByIdAndDelete(req.params.id, function(err, deleteRecipe) {
        res.redirect(`/recipes/${deleteRecipe}`)
    })
}