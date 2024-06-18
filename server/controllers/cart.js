const Cart = require("../models/cart");
const User = require("../models/user");
const Product = require("../models/product");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.addToCart = wrapAsync(async (req, res) => {
    let { id } = req.params;
    //here id is productID
    const currProduct = await Product.findById(id);
    const loggedInUserID = req.user.id;
    let loggedInUser = await User.findById(loggedInUserID);
    let loggedInUserCart = await Cart.findById(loggedInUser.cart);
    let cartUpdated;
    if (loggedInUserCart.products.includes(currProduct._id)) {
        cartUpdated = await Cart.findByIdAndUpdate(loggedInUser.cart, { $pull: { "products": currProduct._id } });
    } else {
        cartUpdated = await Cart.findByIdAndUpdate(loggedInUser.cart, { $push: { "products": currProduct._id } });
    }
    cartUpdated.save();
    res.json(req.user);
});

module.exports.allProducts = wrapAsync (async (req, res) => {
    const loggedInUserID = req.user.id;
    const loggedInUser = await User.findById(loggedInUserID);
    const loggedInUserCart = await Cart.findById(loggedInUser.cart);
    const loggedInUserCartProducts = await loggedInUserCart.populate({
        path: "products"
    });
    res.json(loggedInUserCartProducts.products);
});

module.exports.deleteFromCart = async (req, res) => {
    let { id } = req.params;
    //here id is productID
    const currProduct = await Product.findById(id);
    const loggedInUserID = req.user.id;
    const loggedInUser = await User.findById(loggedInUserID);
    const loggedInUserCart = await Cart.findByIdAndUpdate(loggedInUser.cart, { $pull: { "products": currProduct._id } });
    loggedInUserCart.save();
    res.json(loggedInUserCart);
}