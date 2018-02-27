const Bird = require('../models/bird');

function birdsIndex(req, res, next) {
  Bird
    .find()
    .exec()
    .then((birds) => res.json(birds))
    .catch(next);
}

module.exports = {
  index: birdsIndex
  // create: createRoute,
  // show: showRoute,
  // update: updateRoute,
  // delete: deleteRoute
};
