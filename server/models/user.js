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
    }
});

userSchema.plugin(passportLocalMongoose);
const user = mongoose.model("user", userSchema);
module.exports = user;