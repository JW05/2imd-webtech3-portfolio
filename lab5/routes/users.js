var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authController.signup); 
router.post('/login',authController.login); 
  // signup
  // username uit request halen
  // password uit request halen 
  // bycrypt encrypt
  // databanks


module.exports = router;
