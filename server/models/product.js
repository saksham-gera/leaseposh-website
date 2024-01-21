const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    price: Number
});


const product = mongoose.model("product", productSchema);
module.exports = product;