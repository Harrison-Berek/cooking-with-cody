const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      recipe.comments.push(req.body);
      recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
      });
    });
  }
  
  function deleteComment(req, res, next) {
    Recipe.findOne({'comments._id': req.params.id}).then(function(recipe){
      const comment = recipe.comments.id(req.params.id);
      if (!comment.user.equals(req.user.id)) return res.redirect('/recipes');
      comment.remove();
      recipe.save().then(function() {
        res.redirect(`/recipes/${recipe._id}`);
      }).catch(function(err) {
        return next(err)
      });
    });
  };