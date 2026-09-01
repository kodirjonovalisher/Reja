console.log("Web serverni boshlash...");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        user = JSON.parse(data);
    }
});

// MongoDB chaqirish
const db = require("./server").db();

// 1 Kirish code

app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session codeß

// 3  Views code  
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
 console.log("userentered /create-item");
const new_reja  = req.body.reja;
db.collection("plans").insertOne({ reja: new_reja }, (err, result) => {
    if (err) {
        console.log(err);
        res.end("something went wrong");
    } else {
        res.end("successefully added");
    }
});
}); 
 
    app.get("/author", (req, res) => {
        res.render("author", { user: user});

});

app.get("/", function (req, res) { 
    console.log('userentered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {  
            console.log(err);
            res.end("Xatolik yuz berdi");
        } else {
             
            res.render("reja", { items: data });
        }  
    });

});

module.exports = app; 