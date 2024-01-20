const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api" , (req,res) => {
    const data = [{name : "one"},{name : "two"},{name : "three"}];
    res.json(data);
});

app.get('*', function(req, res){
    console.log('404ing');
    res.render('404');
  });

app.listen(4000, () => {
    console.log("Server Connected On Port 4000");
});