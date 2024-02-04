const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const wishlistController = require("../controllers/wishlist.js");
const { verifyToken } = require("../middleware.js");

router
    .route("/")
    .get(
        verifyToken , wishlistController.allProducts
    );
    
router
    .route("/:id")
    .put(
        verifyToken , wishlistController.wishlistIt
    );

module.exports = router;