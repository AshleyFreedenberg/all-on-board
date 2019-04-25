const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpTrainManualSchema = new Schema({


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

// Execute before each user.save() call
// EmpTrainManualSchema.pre('save', function (callback) {
//     let user = this;
// });

const EmpTrainManual = mongoose.model('EmpTrainManual', EmpTrainManualSchema);

module.exports = EmpTrainManual;