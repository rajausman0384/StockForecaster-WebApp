const mongoose = require("mongoose");

// const Post = require("./post");

const ntnSchema = new mongoose.Schema({
    NTN: {
        type: String,               
        trim: true,       
        required: true
    },
    
});




module.exports = mongoose.model("ntn", ntnSchema);
