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
  clubName: String,
  description: String,
  clubLogo: String,
  clubCover: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  organizers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  meetingLocation: String,
  meetingDatesAndTimes: { type: Object },
  meetingTimes: String,
  personality: [{
    question: String,
    answer: String
  }],
  vibes: [String],
  category: String,
  createdDate: Date,
  foundedYear: Date,
  show: Boolean,
  real: Boolean,
  memberReq: String,
  feeDescription: String,
  clubFeeAmount: Number,
  clubFeePeriod: String
});

ClubSchema.index({
  clubName: 'text',
  description: 'text',
  meetingLocation: 'text',
  vibes: 'text',
  category: 'text'
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
