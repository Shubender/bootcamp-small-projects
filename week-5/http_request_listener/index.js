const http = require("http");
const fs = require("fs");
const PORT = 8080;

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("err in request: ", err));
    response.on("error", (err) => console.log("err in response: ", err));

    // console.log("request method: ", request.method);
    // console.log("request url: ", request.url);
    // console.log("request.headers: ", request.headers);

    if (request.url === "/requests.txt") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write(`<!doctype html>
                    <html>
                    <title>My requests</title>
                    <p></p>
                    </html>
                `);
                response.end();


    if (request.method === "GET" || request.method === "HEAD") {
        if (request.url === "/") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            console.log("request.method:", request.method);
            console.log("request.url:", request.url);
            console.log("request.headers: ", request.headers);

            if (request.method === "HEAD") {
                response.end();
            } else {
                response.write(`<!doctype html>
                    <html>
                    <title>Hello World!</title>
                    <p>Hello World!</p>
                    </html>
                `);
                response.end();
            }
            
        }
    } else if (request.method === "POST") {
        console.log("request.method:", request.method);
        console.log("request.url:", request.url);
        console.log("request.headers: ", request.headers);
        let body = "";

        request.on("data", (chunk) => {
            console.log("chunk: ", chunk);
            body += chunk;
        });

        request.on("end", () => {
            console.log("body: ", body);
            response.setHeader("Location", "/");
            response.statusCode = 302;

            response.end("<h3>Post request was made!</h3>");
        });
    }
    if (request.method !== "GET" && request.method !== "HEAD" && request.method !== "POST") {
        response.statusCode = 405;
        response.end();
    }

    let today = new Date();
    let date = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;

    let myData = `${date}\t${request.method}\t${request.url}\t${request.headers["user-agent"]}\n`;
    //console.log("My data: ", myData);

    fs.appendFile("requests.txt", myData, (err) => {
        if (err) throw err;
    });
});

server.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
