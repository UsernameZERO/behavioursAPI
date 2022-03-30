const mongoose = require('mongoose');

const drivingResultsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    // descByuser: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // }
},{timestamps: true});

const Driving = mongoose.model('Driving', drivingResultsSchema);

module.exports = Driving;