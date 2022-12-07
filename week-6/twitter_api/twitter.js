const https = require("https");

const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env;

const combinedString = `${TWITTER_API_KEY}:${TWITTER_API_SECRET}`;
// console.log("combinedString:", combinedString);

// TASK: use base64 encoding combinedString:
const encodedString = Buffer.from(combinedString).toString("base64"); // use Buffer.from().toString();
// console.log("encodedString:", encodedString);

module.exports.getToken = () => {
    return new Promise((resolve, reject) => {
        const req = https.request({
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                Authorization: `Basic ${encodedString}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8.",
            },
        });

        req.on("response", (res) => {
            // res is response from twitter API
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                const dataJson = JSON.parse(data);
                // console.log("Response for getting Token: ", data);
                resolve(dataJson.access_token);
                //callback(null, dataJson.access_token);
            });
            res.on("error", (err) => {
                reject(err);
                // callback(err, null);
            });
        });

        // Set body and end request
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = (token) => {
    return new Promise((resolve, reject) => {
        const req = https.request({
            method: "GET",
            host: "api.twitter.com",
            path: "/1.1/statuses/user_timeline.json?count=20&screen_name=nytimes&tweet_mode=extended",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        req.on("response", (res) => {
            // res is response from twitter API
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                const dataJson = JSON.parse(data);
                console.log("Response for getting Tweets: ");
                resolve(dataJson);
                // callback(null, dataJson);
            });
            res.on("error", (err) => {
                reject(err);
                // callback(err, null);
            });
        });

        // Set body and end request
        req.end("grant_type=client_credentials");
    });
};
