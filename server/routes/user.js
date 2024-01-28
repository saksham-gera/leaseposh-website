const express = require("express");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        console.log(token);
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, 'mysupersecretcode', (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).send('Invalid token');
        }
        req.user = decoded;
        next();
    });
};

router
    .route("/signup")
    .post(wrapAsync(userController.signup) );

router
    .route("/login")
    .post(passport.authenticate("local", { failureRedirect: '/'}), userController.login)
    .get(verifyToken , (req, res) => {
        console.log("reached here")
        res.json(req.user);
    });
    
module.exports = router;
