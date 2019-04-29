const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    middleInitial: {
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
        trim: true
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        trim: true
    },

    gender: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    DateofBirth: {
        type: Date,
    },
    SSN: {
        type: String,

        trim: true
    },
    preferredName: {
        type: String,
        trim: true
    },
    citizenship: {
        type: Boolean,

    },
    numberOfAllowances: {
        type: Number,
        trim: true
    },
    married: {
        type: Boolean,

    },
    signature: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    formType: {
        type: String,
        required: true
    }

});


const File = mongoose.model('File', FileSchema);

module.exports = File;
