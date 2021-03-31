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
    const pairing = new Pairing(req.body)
    pairing.save(function(err) {
        if (err) return res.redirect(`/recipes/${req.params.id}`);
        res.redirect(`/recipes/${req.params.id}`)
    })
}

