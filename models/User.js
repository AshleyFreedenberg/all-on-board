const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
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
  // firstName: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // middleInitial: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // address: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // phone: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // gender: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // dateOfBirth: {
  //   type: Date,
  //   required: true,
  // },
  // SSN: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // preferredName: {
  //   type: String,
  //   required: false,
  //   trim: true
  // },
});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
  let user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
