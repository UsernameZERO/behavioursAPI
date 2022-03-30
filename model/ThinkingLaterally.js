const mongoose = require('mongoose');

const thinkingLaterallySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    // descByuser: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // }
},{timestamps: true});

const Thinking = mongoose.model('Thinking', thinkingLaterallySchema);

module.exports = Thinking;