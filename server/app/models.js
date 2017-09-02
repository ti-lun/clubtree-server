var mongoose = require('mongoose');


// Club Model
var Club = mongoose.model('clubs', new mongoose.Schema({
  clubName: { type: String, text: true },
  description: { type: String, text: true },
  imageURLs: {
    logo: String,
    cover: String
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  organizers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  meeting: {
    meetingLocation: { type: String, text: true },
    meetingTime: { type: String, text: true }
  },
  personality: [{
    question: String,
    answer: String
  }],
  vibes: [{ type: String, text: true }],
  category: { type: String, text: true },
  createdDate: Date,
  foundedYear: Date
}));

// Club search index
Club.schema.index({'$**': 'text'}); // Wildcard for now

// Member Model
var Member = mongoose.model('members', new mongoose.Schema({
  firstName: String,
  lastName: String,
  clubs: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Club'}],
  joinedDate: Date,
  birthDay: Date
}));

// Login Model, separated from Member for security
var Login = mongoose.model('login', new mongoose.Schema({
  email: String,
  password: String,
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' }
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
module.exports.Login = Login;
//module.exports.Tree = Tree;
