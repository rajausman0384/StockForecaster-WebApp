const Share = require('../models/share');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

exports.shareById = (req, res, next, id) => {
    Share.findById(id)
        .populate('postedBy', '_id name')
      
        .exec((err, post) => {
            if (err || !post) {
                return res.status(400).json({
                    error: err
                });
            }
            req.post = post;
            next();
        });
};


// with pagination
exports.getShares =  (req, res) => {
    // get current page from req.query or use default value of 1
    const currentPage = req.query.page || 1;
    // return 3 posts per page
    const perPage = 6;
    let totalItems;

    const shares = Share.find()
        // countDocuments() gives you total count of posts
        .countDocuments()
        .then(count => {
            totalItems = count;
            return Share.find()
                .skip((currentPage - 1) * perPage)
                // .populate('comments', 'text created')
                // .populate('comments.postedBy', '_id name')
                .populate('postedBy', '_id name')
                // .select('_id title body created likes')
                .limit(perPage)
                .sort({ created: -1 });
        })
        .then(shares => {
            res.status(200).json(shares);
        })
        .catch(err => console.log(err));
};

exports.createShare = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
        if (err) {
            return res.status(400).json({
                error: 'Error is here'
            });
        }
        let share = new Share(fields);

        req.profile.hashed_password = undefined;
        req.profile.salt = undefined;
        share.postedBy = req.profile;

        // if (files.photo) {
        //     post.photo.data = fs.readFileSync(files.photo.path);
        //     post.photo.contentType = files.photo.type;
        // }
        share.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(result);
        });
    });
};

exports.sharesByUser = (req, res) => {
    Share.find({ postedBy: req.profile._id })
        .populate('postedBy', '_id name')
        // .select('_id title body created likes')
        .sort('_created')
        .exec((err, shares) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(shares);
        });
};

exports.isSharer = (req, res, next) => {
    let sameUser = req.post && req.auth && req.post.postedBy._id == req.auth._id;
    let adminUser = req.post && req.auth && req.auth.role === 'admin';

    // console.log("req.post ", req.post, " req.auth ", req.auth);
    // console.log("SAMEUSER: ", sameUser, " ADMINUSER: ", adminUser);

    let isSharer = sameUser || adminUser;

    if (!isSharer) {
        return res.status(403).json({
            error: 'User is not authorized'
        });
    }
    next();
};

// exports.updatePost = (req, res, next) => {
//     let post = req.post;
//     post = _.extend(post, req.body);
//     post.updated = Date.now();
//     post.save(err => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             });
//         }
//         res.json(post);
//     });
// };

exports.updateShare = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
        if (err) {
            return res.status(400).json({
                error: 'Error is Here'
            });
        }
        // save post
        let share = req.post;
        share = _.extend(share, fields);
        share.updated = Date.now();

       

        share.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(share);
        });
    });
};

exports.deleteShare = (req, res) => {
    let share = req.post;
    share.remove((err, share) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({
            message: 'Post deleted successfully'
        });
    });
};


exports.singleShare = (req, res) => {
    return res.json(req.post);
};

