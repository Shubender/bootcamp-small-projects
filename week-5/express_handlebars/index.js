const express = require("express");
const app = express();

const projects = require("./projects.json");

// console.log(projects);

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
        cohortName,
        showImage: true,
    });
});

// :projectDirectory is a placeholder and will be put in req.params object

app.get('/project/:projectDirectory', (req, res) => {
    const projectDirectory = req.params.projectDirectory; // 'kitty-carousel';
    const selectedProject = projects.find((p) => {
        return p.path === projectDirectory;
    });
    
    // TASK: check if selectedProject is undefined.
    //      if it is undefined. set statuscode 404 and send response.
    if (!selectedProject) {
        res.statusCode = 404;
        res.end();
    }

    // console.log("selectedProject:", selectedProject.path);
    // console.log("projects:", projects.path);

    res.render("projects", {
        projects: projects,
        showImage: false,
        selectedProject: selectedProject,
        cohortName,
        helpers: {
            colorChange(text) {
                if (selectedProject.name === text) {
                    return 'colored';
                }
            },
        },
    });
});

app.listen(3000, console.log("running at 3000"));
