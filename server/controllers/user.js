const User = require("../models/user.js");
const Wishlist = require("../models/wishlist.js");
const Cart = require("../models/cart.js");
const jwt = require('jsonwebtoken');
const {Orders} = require("../models/orders.js");



module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newWishlist = new Wishlist({products: []});
        let newCart = new Cart({products: []});
        let newOrders = new Orders({orders: []});
        let newUser = new User({orders: newOrders._id, cart: newCart._id ,wishlist: newWishlist._id , email, username});
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, async (err) => {
            if (err) {
                return next(err);
            }
            await newCart.save();
            await newWishlist.save();
            await newOrders.save();
            let cartWithUserId = await Cart.findByIdAndUpdate(newCart._id, {user_id: newUser._id});
            let wishlistWithUserId = await Wishlist.findByIdAndUpdate(newWishlist._id, {user_id: newUser._id});
            let ordersWithUserId = await Orders.findByIdAndUpdate(newOrders._id, {user_id: newUser._id});
            await cartWithUserId.save();
            await wishlistWithUserId.save();
            await ordersWithUserId.save();

            const token = jwt.sign({ username: newUser.username, id: newUser._id }, process.env.SECRET_CODE);
            res.json({ token });
        });
    } catch (err) {
        req.flash("success", "Welcome To leaseposh");
        res.send("signedup error");
    }

}

module.exports.login = async (req, res) => {
    const user = req.user;
    const token = jwt.sign({ username: user.username, id: user._id}, process.env.SECRET_CODE);
    res.json({ token });
}

