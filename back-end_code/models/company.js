const mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
const crypto = require("crypto");
const { ObjectId } = mongoose.Schema;


const companySchema = new mongoose.Schema({
    name: {
        type: String,               
        trim: true,       
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
   
    hashed_password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        trim: true,
        required: true
    },
    NTN: {
        type: String,
        trim: true,
        required: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    about: {
        type: String,
        trim: true,
        requried: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    
});


/**
 * Virtual fields are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * Keep in mind: virtual properties (password) don’t get persisted in the database.
 * They only exist logically and are not written to the document’s collection.
 */

// virtual field
companySchema
    .virtual("password")
    .set(function(password) {
        // create temporary variable called _password
        this._password = password;
        // generate a timestamp
        this.salt = uuidv1();
        // encryptPassword()
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

// methods
companySchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

// pre middleware
companySchema.pre("remove", function(next) {
    Share.remove({ postedBy: this._id }).exec();
    next();
});

companySchema.pre("remove", function(next) {
    Post.remove({ postedBy: this._id }).exec();
    next();
});
module.exports = mongoose.model("Company", companySchema);
