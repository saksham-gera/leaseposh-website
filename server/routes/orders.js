const express = require("express");
const router = express.Router({mergeParams: true});
const ordersController = require("../controllers/orders.js");
const { verifyToken } = require("../middleware.js");


router
    .route("/")
    .get(
        verifyToken , ordersController.allOrders
    )
    .post(
        ordersController.createOrder
    );

router
    .route("/place")
    .get(
        verifyToken, ordersController.orderSuccess
    )
    .post(
        ordersController.verifyPayment
    );

module.exports = router;