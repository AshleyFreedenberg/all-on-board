const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const w4Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
   SSN: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  married: {
    type: Boolean,
    required: true,
  },
 numberofAllowances: {
    type: Number,
    trim: true
 },
  signature: {
    type: String,
    required: true,
    trim: true
  },
    createdAt: {
    type: Date,
    default: Date.now
  },

});

// Execute before each w4.save() call
// w4Schema.pre('save', function(callback) {
//   let w4 = this;

//   // Break out if the password hasn't changed
//   if (!w4.isModified('password')) return callback();

//   // Password changed so we need to hash it
//   bcrypt.genSalt(5, function(err, salt) {
//     if (err) return callback(err);

//     bcrypt.hash(w4.password, salt, null, function(err, hash) {
//       if (err) return callback(err);
//       w4.password = hash;
//       callback();
//     });
//   });
// });

// w4Schema.methods.verifyPassword = function(password, cb) {
//   bcrypt.compare(password, this.password, function(err, isMatch) {
    // if (err) return cb(err);
    // cb(null, isMatch);
//   });
// };

const w4 = mongoose.model('w4', w4Schema);

module.exports = w4;
