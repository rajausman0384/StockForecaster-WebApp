const express = require("express");
const {
    userById,
    getUser,
    getcurrency,
    getlist,
    updateUser,
    deleteUser,
    userPhoto,
    hasAuthorization
} = require("../controllers/company");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();


router.get("/user/:userId", requireSignin, getUser);
router.get("/user/:userId/stockmanage", requireSignin, hasAuthorization);
router.put("/user/:userId", requireSignin, hasAuthorization, updateUser);
router.delete("/user/:userId", requireSignin, hasAuthorization, deleteUser);
// photo
router.get("/user/photo/:userId", userPhoto);
router.get("/user/:userId/dashboard", requireSignin, getcurrency);
router.get("/user/:userId/dataportal", requireSignin, getlist);



// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
