const router = require('express').Router();
// const birdsController = require('../controllers/birds');
const birds  = require('../controllers/birds');


// routes go here
router.route('/birds')
  .get(birds.index);
// .post(birds.create);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
