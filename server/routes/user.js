const express = require("express");
const router = express.Router();
const passport = require("passport");
const { verifyToken } = require("../middleware.js");
const userController = require("../controllers/user.js");
const wrapAsync = require("../utils/wrapAsync.js");


router
    .route("/signup")
    .post(wrapAsync(userController.signup) );

router
    .route("/login")
    .post(passport.authenticate("local", { failureRedirect: '/'}), userController.login)
    .get(verifyToken , (req, res) => {
        res.json(req.user);
    });
    
module.exports = router;
