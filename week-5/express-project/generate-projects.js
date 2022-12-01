// OR more advanced version: use fs.readDirSync for example

const fs = require("fs");
const path = require("path");

const pathToCheck = path.join(__dirname, "projects");
const myProjects = fs.readdirSync(pathToCheck);


// export module with generateProjects function.
module.exports = function generateProjects() {
    let html = '';
    for (let i = 0; i < myProjects.length; i++) {
        html += `<div><a href="/${myProjects[i]}">${myProjects[i]}</a></div>`;
    }
    return `<h1>My Projects:</h1>` + html;
};
