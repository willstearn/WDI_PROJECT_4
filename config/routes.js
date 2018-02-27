const router = require('express').Router();
// const birdsController = require('../controllers/birds');
const birds  = require('../controllers/birds');


router.route('/birds')
  .get(birds.index);
// .post(birds.create);

router.route('/foods/:id')
  .get(birds.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
