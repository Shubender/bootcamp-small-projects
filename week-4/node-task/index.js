const url = require("url");

const firstUrl = url.parse("http://127.0.0.1:8080/test?a=100&b=200");
const secondUrl = new URL("https://spiced.academy/program/full-stack-web-development/");

console.log('First Url:');
console.log('the protocol:', firstUrl.protocol);
console.log('the host:', firstUrl.host);
console.log("the host name:", firstUrl.hostname);
console.log("the port:", firstUrl.port);
console.log("the pathname:", firstUrl.pathname);
console.log("the query:", firstUrl.query);

console.log("Second Url:");
console.log("the protocol:", secondUrl.protocol);
console.log("the host:", secondUrl.host);
console.log("the host name:", secondUrl.hostname);
console.log("the port:", secondUrl.port);
console.log("the pathname:", secondUrl.pathname);
console.log("the query:", secondUrl.query);