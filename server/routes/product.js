const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const productController = require("../controllers/product.js");


router
    .route("/")
    .get(
        productController.index
    )
    .post(
        productController.createProduct
    );

module.exports = router;