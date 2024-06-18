const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    email : {
        type : String,
        required: true
    },
    wishlist: {
        type: Schema.Types.ObjectId,
        ref: 'wishlist'
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'cart'
    },
    orders: {
        type: Schema.Types.ObjectId,
        ref: 'orders'
    }
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
module.exports = User;