const mongoose = require('mongoose');

const managingConflictsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    // descByuser: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // }
},{timestamps: true});

const Managing = mongoose.model('Managing', managingConflictsSchema);

module.exports = Managing;