const Product = require("../models/product");
const ExpressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.index = wrapAsync (async (req, res) => {
    let allProducts;
    if(req.query.gender || req.query.category) {
        if(req.query.gender && req.query.category) {
            allProducts = await Product.find({gender: req.query.gender , category: req.query.category});
        } else if(req.query.gender == "kids") {
            allProducts = await Product.find({gender: {$in: ['boys', 'girls']}});
        }
        else if (req.query.gender) {
            allProducts = await Product.find({gender: req.query.gender});
        } else if (req.query.category) {
            allProducts = await Product.find({category: req.query.category});
        }
        
        res.json(allProducts);
    } else {
        allProducts = await Product.find({});
        res.json(allProducts);
    }
    
});

module.exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body.product);
    await newProduct.save();
    res.redirect("https://leaseposh.vercel.app/");
}