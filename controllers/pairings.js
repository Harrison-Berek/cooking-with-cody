const Pairing = require('../models/pairing');

module.exports = {
    new: newPairing,
    create
};

function newPairing(req, res) {
    const recipeId = req.params.id;
    res.render('pairings/new', {title: 'New Pairing', recipeId: recipeId});
};

function create(req, res) {
    req.body.recipe = req.params.id;
    Pairing.create(req.body, function(err, pairing){
        res.redirect(`/recipes/${req.params.id}`)
    })
}
