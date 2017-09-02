var express = require('express');
var mongoose = require('mongoose');
var models = require('./models');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

}); */

/* GET login page. 
router.get('/login', function(req, res) {
    res.render('login');
}); */

// API Endpoints

/* Login query, returns true if password matches and false if not. */
router.get('/login/:user/:pass', function (req, res, next) {
  model.Login.find({ email: req.params.user })
    .exec(function (err, document) {
      if (err) { return next(err); }
      res.json(req.params.pass == document.password);
    });
});

/* GET all clubs that match a search query */
router.get('/clubs', function (req, res, next) {
  let promise = models.Club.find();

  // handle search queries
  if (req.query.q) {
    promise.where({ $text: { $search: req.query.q } });
    promise.select({ score: { $meta: "textScore" } });
    promise.sort({ score: { $meta: "textScore" } });
  }

  // handle field selectors
  if (typeof req.query.fields === 'string') {
    promise.select(req.query.fields.split(','));
  } else if (typeof req.query.fields === 'object') {
    promise.select(req.query.fields);
  }

  promise.exec().then(function (documents) {
    res.json(documents);
  }).catch(function (err) {
    console.error(err);
    res.status(500).end({ error: { code: 500, message: "Internal Server Error" } });
  });
});

router.get('/clubs/:id', function (req, res, next) {
  models.Club.findById(req.params.id, function (err, document) {
    if (err) { return next(err); }
    res.json(document);
  });
});

/* POST new club to DB */
router.post('/clubs', function (req, res, next) {
  var club = new models.Club(req.body);
  console.log(req.body);  //seeing what the post body is in the terminal

  club.save(function (err, club) {
    if (err) { return next(err); }
    res.json(club);
  });
});

router.post('/clubs/addMember', function (req, res, next) {
  var club_id = req.body.club_id;
  var member = req.body.member;
  models.Club.findOneAndUpdate({ "clubName": club_id },
    { $push: { "members": member } });

  club.save(function (err, club) {
    if (err) { return next(err); }
    res.json(club);
  });
});

router.post('/clubs/removeMember', function (req, res, next) {
  var club_id = req.body.club_id;
  var member = req.body.member;
  models.Club.findOneAndUpdate({ "clubName": club_id },
    { $pull: { "members": member } });

  club.save(function (err, club) {
    if (err) { return next(err); }
    res.json(club);
  });
});

/* GET all members */
router.get('/members', function (req, res, next) {
  models.Member.find(function (err, members) {
    if (err) { return next(err); }
    res.json(members);
  });
});

/* POST new Member to DB */
router.post('/members', function (req, res, next) {
  var member = new models.Member(req.body.member);
  var login = new models.Login(req.body);

  member.save(function (err, member) {
    if (err) { return next(err); }
    login.save(function (err, login) {
      if (err) { return next(err); }
      res.json(member);
    });
  });
});

module.exports = router;