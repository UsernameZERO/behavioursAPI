const mongoose = require('mongoose');

const influencing_NegotiatingSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    // descByuser: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // }
},{timestamps: true});

const Influencing = mongoose.model('Influencing', influencing_NegotiatingSchema);

module.exports = Influencing;