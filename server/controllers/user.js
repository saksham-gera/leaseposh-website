const passport = require("passport");
const User = require("../models/user.js");
const jwt = require('jsonwebtoken');


module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            console.log("signed up successfully");
            const token = jwt.sign({ username: newUser.username }, 'mysupersecretcode');
            res.json({ token });
        });
    } catch (err) {
        req.flash("success", "Welcome To leaseposh");
        res.send("signedup error");
    }

}

module.exports.login = async (req, res) => {
    // We Are Saving The OriginalURL in Locals Because Passport Resets The property Of session After Authenticating
    // req.flash("success", "Welcome To JustWander");
    // let redirectUrl = res.locals.redirectUrl || "/";
    console.log("logged in successfully");
    const user = req.user;
    const token = jwt.sign({ username: user.username }, 'mysupersecretcode');
    res.json({ token });
}

