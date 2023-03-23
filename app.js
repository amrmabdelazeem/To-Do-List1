//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


const app = express();
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
//adding the public folder to express
app.use(express.static("public"));

//route to root page
app.get("/", function(req, res){
    let day = date.getDate();
    // render check for an ejs file in views folder called List and the object takes the ejs variable from list and compares it with var here.
    res.render('List', {listTitle: day, newListItems: items})
});

app.post("/", function(req, res){

    //request element from list.ejs with the nam e attribute after adding bodyparser to use
    let item = req.body.newItem
    
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

//route to about me page
app.get("/about", function(req, res){
    res.render("about");
});

//route to work page
app.get("/work", function(req, res){
    res.render("List", {listTitle:"Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);

    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});