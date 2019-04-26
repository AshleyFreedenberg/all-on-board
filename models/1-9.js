const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const I9Schema = new Schema({
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
  dateOfBirth: {
    type: Date,
    required: true,
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
  phone: {
    type: String,
    required: true,
    trim: true
  },
  
  citizenship: {
    type: Boolean,
    required: true,
  },
 numberOfAllowances: {
    type: Number,
    trim: true
 },
  createdAt: {
    type: Date,
    default: Date.now
  },
  signature: {
    type: String,
    required: true,
    trim: true
  },

 
  
});

// // Execute before each I9.save() call
// I9Schema.pre('save', function(callback) {
//   let I9 = this;

//   // Break out if the password hasn't changed
//   if (!I9.isModified('password')) return callback();

//   // Password changed so we need to hash it
//   bcrypt.genSalt(5, function(err, salt) {
//     if (err) return callback(err);

//     bcrypt.hash(I9.password, salt, null, function(err, hash) {
//       if (err) return callback(err);
//       I9.password = hash;
//       callback();
//     });
//   });
// });

// I9Schema.methods.verifyPassword = function(password, cb) {
//   bcrypt.compare(password, this.password, function(err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

const I9 = mongoose.model('I9', I9Schema);

module.exports = I9;
