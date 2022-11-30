const http = require("http");
const fs = require("fs");
const path = require("path"); // use path.join() for concatenating paths

const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log("Error while getting request: ", err);
    });
    res.on("error", (err) => {
        console.log("Error while sending response: ", err);
    });

    // In total 3 big if statements
    // 1. Check if method is GET. If it is not. Send response with statuscode 400

    if (req.method !== "GET") {
        res.statusCode = 400;
        res.end();
        return;
    }

    // 2. Check if req.url is '/'. If it is. Do nothing FOR NOW. We will implement later for part 2

    if (req.url === "/") {
        res.end("Do homepage");
    } 

    // 3. Check if req.url is NOT '/'. If it is not '/' then do additional logic

    if (req.url !== "/") {
        // assuming req.url is '/ticker' for now
        // __dirname would result to current directory: /Users/zartin/ws/spiced-ws/lessons/02-node/06-portfolio-fileserver
        const pathToCheck = path.join(__dirname, "projects", req.url);
        const pathExisting = fs.existsSync(pathToCheck);
        if (pathExisting) {
            // if pathToCheck is a file, then
            if (fs.statSync(pathToCheck).isFile()) {
                // save content of file with fs.readFileSync() into variable fileContent;
                const fileContent = fs.readFileSync(pathToCheck);
                // const exension = path.extname(pathToCheck);
                const exension = path.extname(pathToCheck);
                // set headers of response object with setHeaders('content-type',contentTypes[exension]);
                res.setHeader('content-type', contentTypes[exension]);
                res.statusCode = 200;
                res.end(fileContent);
            } else { // else (then it is a directory)
                // does the req.url ends with a slash
                if (req.url.endsWith('/')){
                    //res.end("ends with a slash");
                    // is an index.html file existing under req.url + 'index.html'
                    const indexHtmlPath = path.join(pathToCheck, 'index.html');

                    if (fs.existsSync(path.join(indexHtmlPath))) {
                        // save content of index.html file with fs.readFileSync() into variable htmlContent;
                        const htmlContent = fs.readFileSync(indexHtmlPath);
                        res.setHeader("content-type", "text/html");
                        res.statusCode = 200;
                        res.end(htmlContent);
                    } else {
                        // else send 404 back
                        res.statusCode = 404;
                        res.end();
                    }
                } else {
                    // else (does not end with slash)
                    // make a redirect to req.url + '/'
                    res.setHeader("Location", req.url + '/');
                    res.statusCode = 307;
                    res.end('do the redirect');
                }
            }
            
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
});

server.listen(8081, () => {
    console.log("server listening on port localhost:8081");
});
