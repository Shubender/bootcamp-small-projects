const express = require("express");
const path = require("path");
const app = express();
const generateProjects = require("./generate-projects");
const cookieParser = require("cookie-parser");

let userReq = "";
app.use((req, res, next) => {
    if (req.url.includes("favicon.png")) {
        res.sendFile(path.join(__dirname, "images", "favicon.png"));
    } else {
        next();
    }
});
// needs to be called first in order to access req.cookies
app.use(cookieParser());

// check if we are allowed to visit url by checking cookies
app.use((req, res, next) => {
    if (req.url.startsWith("/cookies")) {
        next();
    } else {
        if (req.cookies.accepted === "on") {
            next();
        } else {
            // save information about initial request in a global variable
            userReq = req.url;
            console.log("userReq:", userReq);
            res.redirect("/cookies/");
        }
    }
});

// middleware to serve static files from a specific folder
const staticMiddleware = express.static(path.join(__dirname, "projects"));
app.use(staticMiddleware);

app.get("/", (req, res) => {
    const finalHtml = generateProjects();
    res.send(finalHtml);
});

// middleware to encoding the body of a POST request
const urlEncodedMiddleware = express.urlencoded({ extended: false });
app.use(urlEncodedMiddleware);

app.get("/cookies", (req, res) => {
    res.sendFile(path.join(__dirname, "/cookies", "index.html"));
});

app.post("/cookies", (req, res) => {
    res.cookie("accepted", req.body.cookies);
    console.log(req.body.cookies);
    // if cookie was accepted
    if (req.body.cookies === "on") {
        console.log("redirect to ", userReq);
        res.redirect(userReq); // redirect to the initial page
    } else {
        // redirect to /cookies
        res.redirect("/cookies/");
    }
});

app.listen(8080, () => {
    console.log("express server is running on localhost:8080");
});
