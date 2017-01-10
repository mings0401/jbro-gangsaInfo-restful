var express = require('express');
var router = express.Router();

// controller Dependency Injection service
var service = require('../service/service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('controller', { title: 'Express' });
});

module.exports = router;

router.get('/api/users', function (req, res, next) {
  var params = {
    phone : req.param('phone'),
    email : req.param('email'),
    name : req.param('name')
  };
  service.selectUsers(params, function (successJson) {
    res.status(200).json(successJson);
  }, function (errorJson) {
    res.status(500).json(errorJson);
  })
});