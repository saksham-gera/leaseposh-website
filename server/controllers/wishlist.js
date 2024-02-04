const Wishlist = require("../models/wishlist");
const User = require("../models/user");
const Product = require("../models/product");

const ExpressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.wishlistIt = wrapAsync (async (req, res) => {
    let { id } = req.params;
    //here id is productID
    const currProduct = await Product.findById(id);
    const loggedInUserID = req.user.id;
    let loggedInUser = await User.findById(loggedInUserID);
    let loggedInUserWishlist = await Wishlist.findById(loggedInUser.wishlist);
    console.log(loggedInUserWishlist);
    console.log("user id: " +loggedInUserID);
    console.log("product id:" +id);
    let wishlistUpdated;
    if(loggedInUserWishlist.products.includes(currProduct._id) ) {
        wishlistUpdated  = await Wishlist.findByIdAndUpdate(loggedInUser.wishlist, {$pull: {"products": currProduct._id}});
    } else {
        wishlistUpdated  = await Wishlist.findByIdAndUpdate(loggedInUser.wishlist, {$push: {"products": currProduct._id}});
    }
    wishlistUpdated.save();
    res.json(req.user);
});

module.exports.allProducts = async (req, res) => {
    console.log("accessing wishlist");
    const loggedInUserID = req.user.id;
    const loggedInUser = await User.findById(loggedInUserID);
    const loggedInUserWishlist = await Wishlist.findById(loggedInUser.wishlist);
    const loggedInUserWishlistProducts =  await loggedInUserWishlist.populate({
        path: "products"
    });
    res.json(loggedInUserWishlistProducts.products);
}