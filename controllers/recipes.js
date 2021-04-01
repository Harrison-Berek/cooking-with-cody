const Pairing = require('../models/pairing');
const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    edit,
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
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const recipe = new Recipe(req.body);
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

function edit(req, res) {
    Recipe.findOne({_id: req.params.id}, function(err, recipe) {
        if (err || !recipe) return res.redirect('/recipes/index');
        res.render('recipes/edit', {title: 'Edit Recipe', recipe});
      });
}

function update(req, res) {
    Recipe.findOneAndUpdate( 
        {_id: req.params.id}, req.body, {new: true}, 
        function(err, recipe) {
            if(err || !recipe) return res.redirect('/recipes/index');
            res.redirect(`/recipes/${recipe._id}`);
        }
      );
}

function deleteRecipe(req, res){
    Recipe.findByIdAndDelete(req.params.id, function(err, recipe) {
        if(!recipe.user.equals(req.user._id)) {
        res.redirect('/recpies/index')
        } else {
            res.redirect('/recipes/index')
        }
    });
}

