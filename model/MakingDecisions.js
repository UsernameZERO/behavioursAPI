const mongoose = require('mongoose');

const makingDecisionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    // descByuser: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // }
},{timestamps: true});

const Decision = mongoose.model('Decision', makingDecisionSchema);

module.exports = Decision;