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

/**
 * get으로 member list 가져오는 api
 */
router.get('/api/members', function (req, res, next) {
  var params = {
    phone : req.param('id'), // 아이디
    email : req.param('email'), // 이메일
    password : req.param('password'), // 비밀번호
    name : req.param('name'), // 이름
    phone : req.param('phone'), // 전화번호
    interests : req.param('interests'), // 관심분야
    isStudent : req.param('isStudent'), // 학생이면 true 아니면 false
    position : req.param('position'), // 직책(학년)
    belong : req.param('belong'), // 소속(학교)
    location : req.param('location'), // 소재지
    division : req.param('division') // 구분 (학교, 기업, 기관)
  };
  service.selectMembers(params, function (successJson) {
    res.status(200).json(successJson);
  }, function (errorJson) {
    res.status(500).json(errorJson);
  })
});

/**
 * post로 member list 가져오는 api
 */
router.post('/api/members', function (req, res, next) {
  var params = {
    id : req.param('id'), // 아이디
    email : req.param('email'), // 이메일
    password : req.param('password'), // 비밀번호
    name : req.param('name'), // 이름
    phone : req.param('phone'), // 전화번호
    interests : req.param('interests'), // 관심분야
    isStudent : req.param('isStudent'), // 학생이면 true 아니면 false
    position : req.param('position'), // 직책(학년)
    belong : req.param('belong'), // 소속(학교)
    location : req.param('location'), // 소재지
    division : req.param('division') // 구분 (학교, 기업, 기관)
  };
  service.selectMembers(params, function (successJson) {
    res.status(200).json(successJson);
  }, function (errorJson) {
    res.status(500).json(errorJson);
  })
});

router.delete('/api/members', function (req, res, next) {
  var params = {
    id : req.param('id'), // 아이디
    password : req.param('password') // 비밀번호
  };
  if(params.id == undefined || params.password == undefined){
    res.status(404).json({
      status: 'err',
      message: 'Not find Information.'
    });
  }else{
    service.deleteMember(params, function (successJson) {
      res.status(200).json(successJson);
    }, function (errorJson) {
      res.status(500).json(errorJson);
    })
  }
});

/**
 * post로 login check
 */
router.post('/api/login', function (req, res, next) {
  var params = {
    id : req.param('id'), // 아이디
    password : req.param('password') // 비밀번호
  };
  if(params.id == undefined || params.password == undefined){
    res.status(200).json({
      status: 'success',
      isLogin: false,
      message: 'Retrieved ALL actions'
    });
  }else{
    service.selectCountMembers(params, function (successJson) {
      res.status(200).json(successJson);
    }, function (errorJson) {
      res.status(500).json(errorJson);
    })
  }
});

/**
 * get로 login check
 */
router.get('/api/login', function (req, res, next) {
  var params = {
    id : req.param('id'), // 아이디
    password : req.param('password') // 비밀번호
  };
  service.selectCountMembers(params, function (successJson) {
    res.status(200).json(successJson);
  }, function (errorJson) {
    res.status(500).json(errorJson);
  })
});