console.log("Web server is starting...");
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3  Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req);
    res.json({ message: "Test success" });
});

app.get("/", function (req, res) { 
    res.render("purchase");
    
});

const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, function () {
    console.log(`The server is running succsessfully on port: ${PORT}`);
})
