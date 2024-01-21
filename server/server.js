const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors');

const productRouter = require("./routes/product.js");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const MONGO_URL = "mongodb://127.0.0.1:27017/leaseposh";
async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
.then(() => {
    console.log("Connected to mongoose");
})
.catch((err) => {
    console.log(err);
});

app.use("/product", productRouter);

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get("/api" , (req,res) => {
    const data = {name : "one",name2 : "two",name3 : "three"};
    console.log("connected")
    res.json(data);
});

app.post("/post", (req,res) => {
    console.log("connected to react");
    res.redirect("http://localhost:5173/");
});

app.get('*', function(req, res){
    console.log('404ing');
    res.render('404');
  });

app.listen(4000, () => {
    console.log("Server Connected On Port 4000");
});