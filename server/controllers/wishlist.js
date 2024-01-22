const Wishlist = require("../models/wishlist");
const ExpressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.index = wrapAsync (async (req, res) => {
    let allProducts = await Wishlist.find({});
    console.log(allProducts);
    res.json(allProducts);
});

module.exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body.product);
    await newProduct.save();
    console.log("Product Saved")
    res.redirect("http://localhost:5173/");
}