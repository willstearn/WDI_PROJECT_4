const router = require('express').Router();
// const birdsController = require('../controllers/birds');
const birds  = require('../controllers/birds');
const secureRoute = require('../lib/secureRoute');
const auth  = require('../controllers/auth');



router.route('/birds')
  .get(secureRoute, birds.index);
// .post(birds.create);

router.route('/foods/:id')
  .get(birds.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
