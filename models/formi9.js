const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const formi9Schema = new Schema({

//   • First Name
//   • Last Name
//   • Middle Initial
//   • Address
//   • DOB
//   • SSN
//   • Email
//   • Phone
//   • Citizenship (A citizen of the United States/A noncitizen national of the United States/A lawful permanent resident/An alien authorized to work)
//   • Signature
//   • Date

// Policy Manual
//   • Full Name
//   • Signature
//   • Date

  firstName: {
    type: String,
    required: true,
    trim: true
  },
  middleName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  DOB: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', formi9Schema );

module.exports = User;