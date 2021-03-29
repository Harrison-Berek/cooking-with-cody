const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    index
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) { 
        res.render('recipes', {title: 'All Recipes', recipes});
    });
};

