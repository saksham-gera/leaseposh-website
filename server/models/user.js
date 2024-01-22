const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: String,
    phone: String,
    wishlist: {
        type: Schema.Types.ObjectId,
        ref: "wishlist"
    }
});


const user = mongoose.model("user", userSchema);
module.exports = user;