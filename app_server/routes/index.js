var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');    

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N.SOHAN KUMAR GOUD(23EG107D47)' });
});

module.exports = router;