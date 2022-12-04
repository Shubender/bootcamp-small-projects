const express = require("express");
const app = express();

const projects = require("./projects.json");

console.log(projects);

// Handlebars Setup
const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
// End of setup

app.use(express.static("./public"));
app.use(express.static("./projects"));

const cohortName = "Spiced Mint";

app.get("/", (req, res) => {
    res.render("projects", {
        layout: "main",
        projects,
        cohortName
    });
});

app.listen(3000, console.log("running at 3000"));
