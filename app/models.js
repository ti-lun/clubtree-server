let _ = require('lodash');
let Promise = require('bluebird');
var mongoose = require('mongoose');
var ExtendedQueryTag = require('./ExtendedQueryTag');

ExtendedQueryTag = new ExtendedQueryTag('./data/extended-tags.txt');

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
  expandedQuery: [String],
  description: String,
  contact: String,
  email: String,
  website: String,
  clubLogo: {
    type: String,
    default: 'https://i.imgur.com/Wvuqswg.png'
  },
  clubCover: {
    type: String,
    default: 'https://i.imgur.com/TA0s69w.png'
  },
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
  expandedQuery: 'text',
  meetingLocation: 'text',
  vibes: 'text',
  category: 'text'
});

ClubSchema.pre('save', function (next) {
  return Promise.try(() => {
    return ExtendedQueryTag.generate(this.description);
  }).then((tags) => {
    this.expandedQuery = tags;
  }).asCallback(next);
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
};

var Club = mongoose.model('clubs', ClubSchema);

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

// Export all the models we created
module.exports.Club = Club;
module.exports.Member = Member;
