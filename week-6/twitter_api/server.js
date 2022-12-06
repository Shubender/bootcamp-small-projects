const express = require("express");
const https = require("https");
const app = express();
require("dotenv").config();

const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env;

const combinedString = `${TWITTER_API_KEY}:${TWITTER_API_SECRET}`;
// console.log("combinedString:", combinedString);

// TASK: use base64 encoding combinedString:
const encodedString = Buffer.from(combinedString).toString("base64"); // use Buffer.from().toString();
// console.log("encodedString:", encodedString);

// 1. get a Bearer Token by making a POST request with encoded Key and Secret

function getToken(callback) {
    const req = https.request({
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedString}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    });

    req.on("response", (res) => {
        // res is response from twitter API
        let data = "";
        res.on("data", (chunk) => {
            data += chunk;
        });
        res.on("end", () => {
            // console.log("Response for getting Token: ", data);
            const dataJson = JSON.parse(data);
            callback(null, dataJson.access_token);
        });
        res.on("error", (err) => {
            callback(err, null);
        });
    });

    // Set body and end request
    req.end("grant_type=client_credentials");
}

// TASK: implement logic for actual GET-Request for getting Tweets. See getToken() function for analogy
// 2. get the Tweets by making a GET request with Bearer Token

function getTweets(token, callback) {
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
            console.log("Response for getting Tweets: ", dataJson);
            callback(null, dataJson);
        });
        res.on("error", (err) => {
            callback(err, null);
        });
    });

    // Set body and end request
    req.end("grant_type=client_credentials");
}

// 3. filter & format/simplify tweets

// TASK: implement filterTweets function
//  - use the array method filter and map
//  - tip: log the tweets and see how to access different information that we are interested in
//          example: tweets.entities.urls[0].url
//  - tip: first filter and then change the structure with map
//      - we want to have something like { "text": "asdfasd", "url": "https://wp.com"}

function filterTweets(tweets) {
    // console.log("entities.urls: ", tweets[0].entities.urls[0].url);
    const filteredTweets = tweets.filter((tweet) => {
        return tweet.entities.urls.length === 1;
    });

    const newTweets = filteredTweets.map(tweet => {
       // TASK for later: move urls from text
         return { text: tweet.full_text, url: tweet.entities.urls[0].url };
    });
    return newTweets;
}

// 4. respond to the client with the filtered/formatted tweets

app.get("/links.json", (req, res) => {
    getToken((error, token) => {
        // console.log("token: ", token);

        // TASK: Check for error
        //      - send back empty JSON if there is an error

        getTweets(token, (error, tweets) => {
            // console.log("tweets: ", tweets);
            // TASK: Check for error
            //      - send back empty JSON if there is an error
            const filteredTweets = filterTweets(tweets);
            // console.log("filteredTweets: ", filteredTweets);

            // TASK: send response back with filteredTweets as JSON (use res.json());
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => {
    console.log("Server running on localhost:8080");
});
