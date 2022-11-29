const http = require("http");
const qs = require("querystring");
const { URLSearchParams } = require("url");
const chalk = require("chalk");

const PORT = 3000;

const server = http
    .createServer((req, res) => {
        req.on("error", (err) => console.log("error in request: ", err));
        res.on("error", (err) => console.log("error in response: ", err));

        if (req.method === "GET") {
            res.setHeader("content-type", "text/html");
            res.statusCode = 200;

            res.write(`<!doctype html>
                <html>
                <title>Colors</title>
                <form method="POST">
                <input type="text" name="text">
                <select name="color">
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="gray">gray</option>
                    <option value="magenta">magenta</option>
                    <option value="cyan">cyan</option>
                </select>
                <button type="submit">Go</button>
                </form>
                </html>`);
            res.end();
        } else if (req.method === "POST") {
            let body = "";

            req.on("data", (chunk) => {
                //console.log("chunk: ", chunk);
                body += chunk;
            });

            req.on("end", () => {
                //console.log("body: ", body);
                const parsedBody = qs.parse(body);
                //console.log("body parsed: ", parsedBody);
                //console.log(parsedBody.text);

                const params = new URLSearchParams(body);

                //console.log(chalk.red(params));
                console.log(chalk.keyword(params.get("color"))(params.get("text")));

                res.setHeader("content-type", "text/html");
                res.statusCode = 200;

                res.end(
                    `<!doctype html>
                        <html>
                        <title>it is better to have loved and lost than never to have loved at all</title>
                        <h1><a href="/" style="color:${params.get("color")}">${params.get("text")}</a></h1>
                        </html>
                    `
                );
            });
        }
    })
    .listen(PORT, () =>
        console.log(`Server is listening at http://localhost:${PORT} 🎧`)
    );