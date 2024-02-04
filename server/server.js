//miscellaneous
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require("connect-flash");

//express
const express = require("express");
const session = require("express-session");
const app = express();
const cors = require('cors');

//passport
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");

//routers
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");
const wishlistRouter = require("./routes/wishlist.js");
const cartRouter = require("./routes/cart.js");


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const MONGO_URL = "mongodb://127.0.0.1:27017/leaseposh";
async function main() {
    await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

main()
.then(() => {
    console.log("Connected to mongoose");
})
.catch((err) => {
    console.log(err);
});

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/product", productRouter);
app.use("/", userRouter);


app.get('*', function(req, res){
    console.log('404ing');
    res.render('404');
  });

app.listen(4000, () => {
    console.log("Server Connected On Port 4000");
});