const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user_id : {
        type : Schema.Types.ObjectId,
        ref: "user",
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "product"
    }]
});

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;