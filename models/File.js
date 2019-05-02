const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fileSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
    },
    firstName: {
        type: String,
        trim: true,
    },
    middleInitial: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        trim: true,
    },
    SSN: {
        type: String,
        trim: true
    },
    preferredName: {
        type: String,
        trim: true
    },
    married: {
        type: Boolean,
    },
    numberofAllowances: {
        type: Number,
        trim: true
    },
    signature: {
        type: String,
        trim: true
    },
    formType: {
        type: String,
        // required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    },
    citizenship: {
        type: Boolean,
      },
      
});


const File = mongoose.model('File', fileSchema);

module.exports = File;
