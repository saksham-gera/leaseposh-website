const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const cartController = require("../controllers/cart.js");
const { verifyToken } = require("../middleware.js");

router
    .route("/")
    .get(
        verifyToken , cartController.allProducts
    );
    
router
    .route("/:id")
    .put(
        verifyToken , cartController.addToCart
    );

router
    .route("/:id/delete")
    .put(
        verifyToken , cartController.deleteFromCart
    )
    


module.exports = router;