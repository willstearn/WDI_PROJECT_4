const Spot = require('../models/spot');
const User = require('../models/user');

function spotsShow(req, res) {
  Spot
    .find({ createdBy: req.params.id })
    .exec()
    .then(spots => {
      User
        .findById(req.params.id)
        .exec()
        .then((user) => {
          res.render('users/show', { user, spots });
          // 'users/show'???
        });
    });
}

function spotsCreate(req, res, next) {

  Spot
    .create(req.body)
    .then(spot => res.status(201).json(spot))
    .catch(next);
}

module.exports = {
  index: spotsCreate,
  show: spotsShow

};
