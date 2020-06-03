const express = require('express');
const {
    getShares,
    createShare,
    sharesByUser,
    shareById,
    isSharer,
    updateShare,
    deleteShare,
    singleShare
} = require('../controllers/share');
const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/company');
const { createShareValidator } = require('../validator');

const router = express.Router();

router.get('/shares', getShares);



// post routes
router.post('/share/new/:userId', requireSignin, createShare, createShareValidator);
router.get('/shares/by/:userId', requireSignin, sharesByUser);
router.get('/share/:postId', singleShare);
router.put('/share/:postId', requireSignin, isSharer, updateShare);
router.delete('/share/:postId', requireSignin, isSharer, deleteShare);


// any route containing :userId, our app will first execute userById()
router.param('userId', userById);
// any route containing :postId, our app will first execute postById()
router.param('postId', shareById);

module.exports = router;
