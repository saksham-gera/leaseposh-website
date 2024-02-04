const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user_id : {
        type : Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "product"
    }]
});

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;