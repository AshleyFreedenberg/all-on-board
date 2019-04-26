const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicyManualSchema = new Schema({


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
    signature: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// PolicyManualSchema.pre('save', function (callback) {
//     let user = this;
// });

const PolicyManual = mongoose.model('PolicyManual', PolicyManualSchema);

module.exports = PolicyManual;