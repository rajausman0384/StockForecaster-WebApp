const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const shareSchema = new mongoose.Schema({
    shareName: {
        type: String,
        required: true
    },
    shareSymbol: {
        type: String,
        required: true
    },
    shareValue: {
        type: Number,
        required: true
    },
    shareOpenPrice: {
        type: Number,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: 'Company'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    
});

module.exports = mongoose.model('Share', shareSchema);
