var mongoose = require('mongoose');

// Club Model
var Club = mongoose.model('clubs', new mongoose.Schema({
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
}));

// Club search index
Club.schema.index({'$**': 'text'}); // Wildcard for now

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
  fbID: Number,
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
