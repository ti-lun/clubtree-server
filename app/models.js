let _ = require('lodash');
var mongoose = require('mongoose');

// Club Model
let softRequiredFields = [
  'clubName',
  'description',
  'members',
  'organizers',
  'meetingLocation',
  'meetingDatesAndTimes',
  'vibes',
  'category',
  'createdDate',
  'foundedYear',
  'memberReq',
  'clubFeeAmount',
  'clubFeePeriod'
];

let ClubSchema = new mongoose.Schema({
  clubName: { type: String, text: true },
  description: { type: String, text: true },
  clubLogo: String,
  clubCover: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  organizers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  meetingLocation: { type: String, text: true },
  meetingDatesAndTimes: { type: Object },
  personality: [{
    question: String,
    answer: String
  }],
  vibes: [{ type: String, text: true }],
  category: { type: String, text: true },
  createdDate: Date,
  foundedYear: Date,
  show: Boolean,
  memberReq: String,
  clubFeeAmount: Number,
  clubFeePeriod: String
});

ClubSchema.methods.calculateCompleteness = function () {
  if (_.keys(_.pick(this, softRequiredFields)).length === softRequiredFields.length) {
    if (_.isArray(this.vibes) && this.vibes.length >= 3) {
      this.show = true;
    } else {
      this.show = false;
    }
  } else {
    this.show = false;
  }
}

var Club = mongoose.model('clubs', ClubSchema);

// Club search index
Club.schema.index({ '$**': 'text' }); // Wildcard for now

// Member Model
var Member = mongoose.model('members', new mongoose.Schema({
  firstName: String,
  lastName: String,
  clubs: [{
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club'
    },
    role: String,
    organizer: Boolean
  }],
  joinedDate: Date,
  birthday: Date,
  profPicURL: String,
  fbID: String,
  gpID: Number
}));

/*
// Tree Model
var Tree = mongoose.model('trees', new mongoose.Schema({
  Organizers: [{ username: String, rank: Number }],
  Members: [{ username: String, rank: Number }]
}));
*/

// Export all the models we created
module.exports.Club = Club;
module.exports.Member = Member;
//module.exports.Tree = Tree;
