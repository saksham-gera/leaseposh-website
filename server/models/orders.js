const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemsSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    ],
    amount: Number,
    rzp_orderid: String,
    rzp_signature: String,
    rzp_paymentid: String
});

const ordersSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    orders: [orderItemsSchema]
});

const OrderItems = mongoose.model("OrderItems", orderItemsSchema);
const Orders = mongoose.model("Orders", ordersSchema);
module.exports = {
    OrderItems,
    Orders
};