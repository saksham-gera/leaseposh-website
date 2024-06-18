const Cart = require("../models/cart.js");
const { Orders, OrderItems } = require("../models/orders.js");
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Razorpay = require("razorpay");
const crypto = require("crypto");

module.exports.allOrders = wrapAsync(async (req, res) => {
    const loggedInUserID = req.user.id;
    const loggedInUser = await User.findById(loggedInUserID);
    if (!loggedInUser) {
        return res.status(404).json({ message: "User not found" });
    }
    const loggedInUserOrders = await Orders.findOne({ user_id: loggedInUserID }).populate({
        path: "orders.products",
        model: "product"
    });
    res.json(loggedInUserOrders.orders);
});

module.exports.verifyPayment = async (req, res) => {
    try {
        let { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
        let sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET).update(sign.toString()).digest("hex");
        console.log(response.razorpay_signature);
        console.log(expectedSign);
        if (razorpay_signature === expectedSign) {
            res.send({"message" : "Payment Verified"}).status(200);
        } else {
            res.send({"message" : "Payment Verification Failed"}).status(401);
        }
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}

module.exports.createOrder = async (req, res) => {
    try {
        let { amount } = req.body;
        const options = {
            amount: amount,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        }

        const rzp_instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET
        });

        const order = await rzp_instance.orders.create(options);
        res.json(order);
    } catch (e) {
        console.log(e);
        return res.send(e);
    }
}

module.exports.orderSuccess = wrapAsync(async (req, res) => {
    let amount = req.query.amount;
    let rzp_orderid = req.query.rzp_orderid;
    let rzp_paymentid = req.query.rzp_paymentid;
    let rzp_signature = req.query.rzp_signature;
    console.log("order placing" + amount);
    const loggedInUserID = req.user.id;
    const loggedInUser = await User.findById(loggedInUserID);
    const loggedInUserCart = await Cart.findById(loggedInUser.cart);
    const newOrder = new OrderItems({ "products": loggedInUserCart.products, "amount": amount, "rzp_orderid": rzp_orderid, "rzp_paymentid": rzp_paymentid, "rzp_signature": rzp_signature });
    await Orders.findByIdAndUpdate(loggedInUser.orders, { $push: { "orders": newOrder } });
    await Cart.findByIdAndUpdate(loggedInUser.cart, { products: [] });
    res.json({ message: "order placed successefully" }).status(200);
});

