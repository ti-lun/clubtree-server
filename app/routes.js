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

  if (typeof req.query.category === 'string') {
    promise.where({ category: req.query.category });
    promise.collation({ locale: 'en', strength: 2 });
  } else if (Array.isArray(req.query.category)) {
    promise.where({ category: { $in: req.query.category } });
    promise.collation({ locale: 'en', strength: 2 });
  }

  if (typeof req.query.vibe === 'string') {
    promise.where({ vibes: req.query.vibe });
    promise.collation({ locale: 'en', strength: 2 });
  } else if (Array.isArray(req.query.vibe)) {
    promise.where({ vibes: { $in: req.query.vibe } });
    promise.collation({ locale: 'en', strength: 2 });
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

  // first, find the organizer who made this club.
  models.Member.findById(req.body.organizerID, function(err, organizer) {
    if (err) { return next(err); }

    let clubInitialize = {
      clubName: req.body.clubName,
      description: req.body.description,
      category: req.body.category,
      organizers: [organizer._id]
    }

    // create club.  Yay
    var club = new models.Club(clubInitialize);

    club.save((err, club) => {
      if (err) { return next(err); }
      console.log("organizer is still here right?", organizer);
      // now update the organizer's list of clubs.
      console.log("club is", club);
      organizer.clubs.push({
        club: club["_id"],
        role: "Founder",
        organizer: true
      });

      organizer.save((err, organizer) => {
        if (err) {return next(err); }
      });

      res.json(club);
    });
  });
});

router.put('/clubs', function (req, res, next) {
  models.Club.findById(req.body.id, function(err, club) {
    if (err) {
      res.send(err);
    }

    console.log("clubi s", club);

    for (let field in req.body.updateFields) {
      console.log("field updating is", field);
      club[field] = req.body.updateFields[field]
    }

    club.save(function(err) {
      if (err) {
        req.send("when saving, got", err);
      }

      res.json({ message: "Club updated w" + req.body.updateFields });
    });
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
  let promise = models.Member.find();

  if (typeof req.query.fbID === 'string') {
    promise.where({ fbID: req.query.fbID });
  }

  if (typeof req.query["_id"] === 'string') {
    promise.where({ "_id": req.query["_id"] });
  }

  promise.exec().then(function (members) {
    res.json(members);
  }).catch(function (err) {
    console.error(err);
    res.status(500).end({ error: { code: 500, message: "Internal Server Error" } });
  });

});

/* POST new Member to DB */
router.post('/members', function (req, res, next) {
  var member = new models.Member(req.body);

  member.save(function (err, member) {
    if (err) { return next(err); }
    res.json(member);
  });
});

module.exports = router;
