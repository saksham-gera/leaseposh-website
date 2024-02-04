const User = require("../models/user.js");
const Wishlist = require("../models/wishlist.js");
const jwt = require('jsonwebtoken');



module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newWishlist = new Wishlist({products: []});
        let newUser = new User({wishlist: newWishlist._id , email, username});
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, async (err) => {
            if (err) {
                return next(err);
            }
            console.log("signed up successfully");

            await newWishlist.save();
            let wishlistWithUserId = await Wishlist.findByIdAndUpdate(newWishlist._id, {user_id: newUser._id});
            await wishlistWithUserId.save();

            const token = jwt.sign({ username: newUser.username, id: newUser._id }, 'mysupersecretcode');
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
    console.log(user);
    const token = jwt.sign({ username: user.username, id: user._id}, 'mysupersecretcode');
    res.json({ token });
}

